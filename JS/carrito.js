/**
 * carrito.js — Carrito de compras único para todo el sitio.
 * Guarda solo { id, cantidad, imagen } en localStorage.
 * Nombre y precio siempre se leen del catálogo (una sola fuente de verdad).
 * Requiere: catalogo.js
 */
(function () {
  const CLAVE = 'innovatech-carrito';
  const CLAVE_VIEJA = 'shoppingCart';
  const MAX_CANTIDAD = 99;
  const oyentes = [];

  // ---------- Almacenamiento ----------
  function leer() {
    try {
      const guardado = localStorage.getItem(CLAVE);
      if (guardado) return JSON.parse(guardado);

      // Migración desde el carrito anterior
      const viejo = JSON.parse(localStorage.getItem(CLAVE_VIEJA) || '[]');
      const migrado = viejo
        .filter((x) => Number.isInteger(Number(x.id)))
        .map((x) => ({ id: Number(x.id), cantidad: x.quantity || 1, imagen: x.image || null }));
      localStorage.removeItem(CLAVE_VIEJA);
      if (migrado.length) localStorage.setItem(CLAVE, JSON.stringify(migrado));
      return migrado;
    } catch (e) {
      return [];
    }
  }

  function guardar(items) {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(items));
    } catch (e) {
      console.warn('No se pudo guardar el carrito', e);
    }
    avisarCambio();
  }

  function avisarCambio() {
    actualizarUI();
    oyentes.forEach((fn) => fn());
  }

  // ---------- Operaciones ----------
  function items() {
    return leer();
  }

  function contar() {
    return items().reduce((suma, it) => suma + it.cantidad, 0);
  }

  function limitar(n) {
    n = parseInt(n, 10);
    if (isNaN(n) || n < 1) return 1;
    return Math.min(n, MAX_CANTIDAD);
  }

  function agregar(id, cantidad = 1, imagen = null) {
    id = Number(id);
    const lista = items();
    const existente = lista.find((it) => it.id === id);
    if (existente) {
      existente.cantidad = limitar(existente.cantidad + limitar(cantidad));
      if (imagen) existente.imagen = imagen;
    } else {
      lista.push({ id, cantidad: limitar(cantidad), imagen });
    }
    guardar(lista);
    Catalogo.producto(id)
      .then((p) => notificar(`${p ? p.nombre : 'Producto'} agregado al carrito`))
      .catch(() => notificar('Producto agregado al carrito'));
  }

  function cambiarCantidad(id, cantidad) {
    id = Number(id);
    const n = parseInt(cantidad, 10);
    if (isNaN(n) || n < 1) return quitar(id);
    const lista = items();
    const it = lista.find((x) => x.id === id);
    if (!it) return;
    it.cantidad = limitar(n);
    guardar(lista);
  }

  function quitar(id) {
    guardar(items().filter((it) => it.id !== Number(id)));
  }

  function vaciar() {
    guardar([]);
  }

  // Items con datos completos del catálogo
  async function detalle() {
    const datos = await Catalogo.cargar();
    return items()
      .map((it) => {
        const producto = datos.productos.find((p) => p.id === it.id);
        if (!producto) return null;
        return {
          ...it,
          producto,
          imagen: it.imagen || producto.imagen,
          subtotal: producto.precio * it.cantidad
        };
      })
      .filter(Boolean);
  }

  async function total() {
    const lista = await detalle();
    return lista.reduce((suma, it) => suma + it.subtotal, 0);
  }

  // ---------- Mini carrito del header ----------
  async function actualizarUI() {
    const contador = document.querySelector('.cart-count');
    if (contador) {
      const n = contar();
      contador.textContent = n;
      contador.style.display = n > 0 ? 'inline-flex' : 'none';
    }

    const lista = document.querySelector('.cart-panel .cart-items');
    const totalEl = document.querySelector('.cart-panel #cart-total');
    if (!lista || !totalEl) return;

    let datos;
    try {
      datos = await detalle();
    } catch (e) {
      lista.innerHTML = '<li class="mini-vacio">No se pudo cargar el carrito</li>';
      return;
    }

    lista.innerHTML = '';
    if (datos.length === 0) {
      lista.innerHTML = '<li class="mini-vacio">Tu carrito está vacío</li>';
    }
    datos.forEach((it) => {
      const li = document.createElement('li');
      li.className = 'mini-item';

      const info = document.createElement('div');
      const nombre = document.createElement('div');
      nombre.className = 'mini-nombre';
      nombre.textContent = it.producto.nombre;
      const precio = document.createElement('div');
      precio.className = 'mini-precio';
      precio.textContent = `${it.cantidad} × ${Catalogo.dinero(it.producto.precio)}`;
      info.append(nombre, precio);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mini-quitar';
      btn.textContent = '✕';
      btn.setAttribute('aria-label', 'Quitar ' + it.producto.nombre);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        quitar(it.id);
      });

      li.append(info, btn);
      lista.appendChild(li);
    });
    totalEl.textContent = Catalogo.dinero(datos.reduce((s, it) => s + it.subtotal, 0));
  }

  function notificar(mensaje) {
    const aviso = document.createElement('div');
    aviso.className = 'carrito-aviso';
    aviso.setAttribute('role', 'status');
    aviso.textContent = mensaje;
    document.body.appendChild(aviso);
    requestAnimationFrame(() => aviso.classList.add('visible'));
    setTimeout(() => {
      aviso.classList.remove('visible');
      setTimeout(() => aviso.remove(), 300);
    }, 2500);
  }

  function estilos() {
    if (document.getElementById('carrito-estilos')) return;
    const css = document.createElement('style');
    css.id = 'carrito-estilos';
    css.textContent = `
      .carrito-aviso { position: fixed; top: 100px; right: 20px; z-index: 10000; background: #1D1ABE; color: #fff;
        padding: 15px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,.2); font-weight: 600;
        transform: translateX(120%); opacity: 0; transition: all .3s ease; }
      .carrito-aviso.visible { transform: translateX(0); opacity: 1; }
      .mini-item { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 10px;
        padding: 8px; background: #f9f9f9; border-radius: 6px; list-style: none; color: #222; }
      .mini-nombre { font-weight: 600; font-size: 14px; }
      .mini-precio { font-size: 13px; color: #666; }
      .mini-quitar { background: #ff3b3f; color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
      .mini-vacio { text-align: center; color: #888; padding: 20px; list-style: none; }
    `;
    document.head.appendChild(css);
  }

  function conectarPanel() {
    const enlace = document.getElementById('cart-link');
    const panel = document.querySelector('.cart-panel');
    if (!enlace || !panel) return;
    panel.style.display = 'none';
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      const abrir = panel.style.display === 'none';
      panel.style.display = abrir ? 'block' : 'none';
      enlace.setAttribute('aria-expanded', String(abrir));
      panel.setAttribute('aria-hidden', String(!abrir));
    });
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && !enlace.contains(e.target)) {
        panel.style.display = 'none';
        enlace.setAttribute('aria-expanded', 'false');
        panel.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Sincroniza entre pestañas abiertas
  window.addEventListener('storage', (e) => {
    if (e.key === CLAVE) avisarCambio();
  });

  document.addEventListener('DOMContentLoaded', () => {
    estilos();
    conectarPanel();
    actualizarUI();
  });

  window.cart = {
    agregar,
    quitar,
    cambiarCantidad,
    vaciar,
    items,
    contar,
    detalle,
    total,
    actualizarUI,
    alCambiar: (fn) => oyentes.push(fn)
  };
})();
