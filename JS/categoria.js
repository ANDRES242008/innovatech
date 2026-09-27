/**
 * categoria.js — Ordenar productos en las páginas de categoría.
 */
(function () {
  const numero = (texto) => parseFloat((texto || '').replace(/[^0-9.]/g, '')) || 0;

  function ordenar(criterio) {
    const contenedor = document.querySelector('.productos');
    if (!contenedor) return;
    const productos = Array.from(contenedor.querySelectorAll('.producto'));
    const precio = (el) => numero(el.querySelector('.precio-descuento')?.textContent);
    const descuento = (el) => numero(el.querySelector('.descuento')?.textContent);

    productos.sort((a, b) => {
      if (criterio === 'precio-asc') return precio(a) - precio(b);
      if (criterio === 'precio-desc') return precio(b) - precio(a);
      if (criterio === 'descuento') return descuento(b) - descuento(a);
      return 0;
    });
    productos.forEach((p) => contenedor.appendChild(p));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('orden-select');
    if (select) select.addEventListener('change', (e) => ordenar(e.target.value));
  });
})();
