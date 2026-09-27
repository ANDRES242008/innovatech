/**
 * buscador.js — Búsqueda con autocompletado en el header.
 * Busca en todo el catálogo, ignora acentos y mayúsculas.
 * Teclado: ↑ ↓ para moverse, Enter para abrir, Esc para cerrar.
 * Requiere: catalogo.js
 */
(function () {
  const MAX_RESULTADOS = 8;

  const normalizar = (texto) =>
    (texto || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

  function buscar(datos, consulta) {
    const palabras = normalizar(consulta).split(/\s+/).filter(Boolean);
    if (!palabras.length) return [];
    const nombresCategoria = Object.fromEntries(datos.categorias.map((c) => [c.id, c.nombre]));

    return datos.productos
      .map((p) => {
        const nombre = normalizar(p.nombre);
        const texto = nombre + ' ' + normalizar(nombresCategoria[p.categoria]);
        if (!palabras.every((w) => texto.includes(w))) return null;
        const puntos = (nombre.startsWith(palabras[0]) ? 2 : 0) + (nombre.includes(palabras.join(' ')) ? 1 : 0);
        return { p, puntos, categoria: nombresCategoria[p.categoria] };
      })
      .filter(Boolean)
      .sort((a, b) => b.puntos - a.puntos || a.p.nombre.localeCompare(b.p.nombre))
      .slice(0, MAX_RESULTADOS);
  }

  function estilos() {
    if (document.getElementById('buscador-estilos')) return;
    const css = document.createElement('style');
    css.id = 'buscador-estilos';
    css.textContent = `
      .search-container { position: relative; }
      .buscador-lista { position: absolute; top: calc(100% + 6px); left: 0; right: 0; z-index: 9999; display: none;
        background: #fff; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,.25); max-height: 420px;
        overflow-y: auto; padding: 6px 0; text-align: left; }
      .buscador-lista.abierta { display: block; }
      .buscador-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; cursor: pointer;
        color: #222; text-decoration: none; }
      .buscador-item:hover, .buscador-item.activo { background: #eef4ff; }
      .buscador-item img { width: 44px; height: 44px; object-fit: contain; border-radius: 6px; background: #f5f5f5; flex: none; }
      .buscador-nombre { font-weight: 600; font-size: 14px; line-height: 1.2; }
      .buscador-meta { font-size: 12px; color: #666; }
      .buscador-vacio { padding: 12px; color: #666; font-size: 14px; }
      .buscador-item mark { background: #ffe58a; color: inherit; padding: 0; }
    `;
    document.head.appendChild(css);
  }

  function resaltar(elemento, texto, consulta) {
    // Resalta coincidencias sin usar innerHTML (evita inyección de HTML)
    const palabras = normalizar(consulta).split(/\s+/).filter(Boolean);
    const base = normalizar(texto);
    const marcas = new Array(texto.length).fill(false);
    palabras.forEach((w) => {
      let i = base.indexOf(w);
      while (i !== -1) {
        for (let k = i; k < i + w.length; k++) marcas[k] = true;
        i = base.indexOf(w, i + w.length);
      }
    });
    let actual = '';
    let marcado = false;
    const vaciar = () => {
      if (!actual) return;
      if (marcado) {
        const m = document.createElement('mark');
        m.textContent = actual;
        elemento.appendChild(m);
      } else {
        elemento.appendChild(document.createTextNode(actual));
      }
      actual = '';
    };
    for (let i = 0; i < texto.length; i++) {
      if (marcas[i] !== marcado) {
        vaciar();
        marcado = marcas[i];
      }
      actual += texto[i];
    }
    vaciar();
  }

  function iniciar() {
    const input = document.getElementById('search');
    if (!input) return;
    const contenedor = input.closest('.search-container') || input.parentElement;
    estilos();

    let lista = document.getElementById('autocompleteDropdown');
    if (!lista) {
      lista = document.createElement('div');
      lista.id = 'autocompleteDropdown';
      contenedor.appendChild(lista);
    }
    lista.className = 'buscador-lista';
    lista.setAttribute('role', 'listbox');
    lista.removeAttribute('style');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('aria-controls', lista.id);
    input.setAttribute('aria-expanded', 'false');

    let resultados = [];
    let activo = -1;
    let temporizador;

    const cerrar = () => {
      lista.classList.remove('abierta');
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      activo = -1;
    };

    const ir = (r) => {
      if (r) window.location.href = 'producto.html?id=' + r.p.id;
    };

    const marcarActivo = () => {
      lista.querySelectorAll('.buscador-item').forEach((el, i) => {
        el.classList.toggle('activo', i === activo);
        el.setAttribute('aria-selected', String(i === activo));
        if (i === activo) {
          input.setAttribute('aria-activedescendant', el.id);
          el.scrollIntoView({ block: 'nearest' });
        }
      });
    };

    function pintar(consulta) {
      lista.innerHTML = '';
      activo = -1;
      if (!resultados.length) {
        const vacio = document.createElement('div');
        vacio.className = 'buscador-vacio';
        vacio.textContent = `Sin resultados para "${consulta}"`;
        lista.appendChild(vacio);
      }
      resultados.forEach((r, i) => {
        const a = document.createElement('a');
        a.className = 'buscador-item';
        a.id = 'buscador-op-' + i;
        a.href = 'producto.html?id=' + r.p.id;
        a.setAttribute('role', 'option');

        const img = document.createElement('img');
        img.src = r.p.imagen;
        img.alt = '';
        img.loading = 'lazy';

        const info = document.createElement('div');
        const nombre = document.createElement('div');
        nombre.className = 'buscador-nombre';
        resaltar(nombre, r.p.nombre, consulta);
        const meta = document.createElement('div');
        meta.className = 'buscador-meta';
        meta.textContent = `${r.categoria} · ${Catalogo.dinero(r.p.precio)}`;
        info.append(nombre, meta);

        a.append(img, info);
        lista.appendChild(a);
      });
      lista.classList.add('abierta');
      input.setAttribute('aria-expanded', 'true');
    }

    input.addEventListener('input', () => {
      clearTimeout(temporizador);
      const consulta = input.value;
      if (normalizar(consulta).length < 2) return cerrar();
      temporizador = setTimeout(async () => {
        try {
          const datos = await Catalogo.cargar();
          resultados = buscar(datos, consulta);
          pintar(consulta.trim());
        } catch (e) {
          cerrar();
        }
      }, 150);
    });

    input.addEventListener('keydown', (e) => {
      if (!lista.classList.contains('abierta')) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activo = Math.min(activo + 1, resultados.length - 1);
        marcarActivo();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activo = Math.max(activo - 1, 0);
        marcarActivo();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        ir(resultados[activo >= 0 ? activo : 0]);
      } else if (e.key === 'Escape') {
        cerrar();
      }
    });

    const boton = contenedor.querySelector('button');
    if (boton) boton.addEventListener('click', () => ir(resultados[0]));

    document.addEventListener('click', (e) => {
      if (!contenedor.contains(e.target)) cerrar();
    });
  }

  document.addEventListener('DOMContentLoaded', iniciar);
})();
