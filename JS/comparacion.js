
    const CARACTERISTICAS = [
      { key: 'img', label: 'Imagen' },
      { key: 'nombre', label: 'Nombre' },
      { key: 'precio', label: 'Precio' },
      { key: 'descuento', label: 'Descuento' },
      { key: 'ram', label: 'RAM' },
      { key: 'almacenamiento', label: 'Almacenamiento' },
      { key: 'bateria', label: 'Batería' },
      { key: 'pantalla', label: 'Pantalla' },
      { key: 'camara', label: 'Cámara' },
      { key: 'tipo', label: 'Tipo' }
    ];

    let comparar = JSON.parse(localStorage.getItem('compararProductos') || '[]');

    function renderComparacion() {
      const container = document.getElementById('compare-table-visual');
      container.innerHTML = '';
      if (comparar.length === 0) {
        container.innerHTML = '<div class="empty-msg">No has agregado productos para comparar.</div>';
        return;
      }
      const productos = comparar.slice(0, 4);
      const diferencias = {};
      CARACTERISTICAS.forEach(c => {
        const valores = productos.map(p => (p[c.key] || '').toLowerCase());
        diferencias[c.key] = new Set(valores).size > 1;
      });
      let html = `<div class="compare-table-visual">
        <div class="compare-row-visual header">
          <div>Característica</div>
          ${productos.map((p,i) => `<div>Producto ${i+1}</div>`).join('')}
        </div>`;
      CARACTERISTICAS.forEach(c => {
        html += `<div class="compare-row-visual">
          <div>${c.label}</div>
          ${productos.map(p => {
            let valor = p[c.key] || '-';
            if (c.key === 'img' && valor !== '-') {
              return `<div><img src="${valor}" alt="${p.nombre}" onclick="verImagen('${valor}')"/></div>`;
            } else if (c.key === 'nombre') {
              return `<div><span>${valor}</span><br>
                <a class="btn-ficha" href="product${(p.tipo||'').toLowerCase()}s.html?id=${p.id}" target="_blank">Ver ficha</a>
                <button class="btn-remove" onclick="quitarComparacion('${p.id}','${p.tipo}')">Quitar</button>
              </div>`;
            } else if (diferencias[c.key] && valor !== '-') {
              return `<div class="diff">${valor}</div>`;
            } else {
              return `<div>${valor}</div>`;
            }
          }).join('')}
        </div>`;
      });
      html += `</div>`;
      container.innerHTML = html;
    }

    function quitarComparacion(id, tipo) {
      comparar = comparar.filter(p => !(p.id === id && p.tipo === tipo));
      localStorage.setItem('compararProductos', JSON.stringify(comparar));
      renderComparacion();
    }

    function limpiarComparacion() {
      comparar = [];
      localStorage.removeItem('compararProductos');
      renderComparacion();
    }

    function ordenarPor(campo) {
      comparar.sort((a, b) => {
        if (campo === 'precio') return parseFloat(a.precio) - parseFloat(b.precio);
        return (a[campo] || '').localeCompare(b[campo] || '');
      });
      renderComparacion();
    }

    function verImagen(src) {
      const modal = document.createElement('div');
      modal.className = 'modal-img-bg';
      modal.innerHTML = `<img src="${src}"/><button class="close-modal" onclick="this.parentNode.remove()">×</button>`;
      document.body.appendChild(modal);
    }

    renderComparacion();