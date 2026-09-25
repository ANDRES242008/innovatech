(function() {
  document.addEventListener('DOMContentLoaded', () => {

    // ==========================
    // Menú Categorías (NUEVA LÓGICA)
    // ==========================
    (function initCategories() {
      const categoriesLabel = document.querySelector('.categories-label');
      const menuItems = document.querySelector('.menu-items');

      if (categoriesLabel && menuItems) {
        // Abrir/Cerrar al hacer clic
        categoriesLabel.addEventListener('click', (e) => {
          e.stopPropagation();
          menuItems.classList.toggle('visible');
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
          if (!categoriesLabel.contains(e.target) && !menuItems.contains(e.target)) {
            menuItems.classList.remove('visible');
          }
        });

        // Accesibilidad (Enter o Espacio)
        categoriesLabel.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menuItems.classList.toggle('visible');
          }
        });
      }
    })();


    // ==========================
    // Funciones de Búsqueda y Utilidades
    // ==========================

    function debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    function highlightText(element, query) {
      if (!query) {
        element.innerHTML = element.textContent;
        return;
      }
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      element.innerHTML = element.textContent.replace(regex, '<mark>$1</mark>');
    }

    function filterProducts(query) {
      const cards = document.querySelectorAll('.card');
      const productos = document.querySelectorAll('.producto');
      let anyVisible = false;

      // Filtrar Cards
      cards.forEach(card => {
        const titleEl = card.querySelector('.card-title');
        const title = titleEl.textContent.toLowerCase();
        const match = title.includes(query);
        card.style.display = match ? 'block' : 'none';
        highlightText(titleEl, query);
        if (match) anyVisible = true;
      });

      // Filtrar Productos
      productos.forEach(producto => {
        const nameEl = producto.querySelector('.nombre-producto');
        const name = nameEl.textContent.toLowerCase();
        const match = name.includes(query);
        producto.style.display = match ? 'block' : 'none';
        highlightText(nameEl, query);
        if (match) anyVisible = true;
      });

      // Mensaje "No resultados"
      let noResults = document.querySelector('.no-results-message');
      if (!noResults) {
        noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.style.color = 'red';
        noResults.style.fontWeight = 'bold';
        noResults.style.marginTop = '1em';
        noResults.textContent = 'No se encontraron resultados.';
        const productosContainer = document.querySelector('.productos');
        // Insertar mensaje solo si existe el contenedor
        if (productosContainer) {
          productosContainer.parentNode.insertBefore(noResults, productosContainer.nextSibling);
        }
      }

      noResults.style.display = anyVisible ? 'none' : 'block';
    }

    // Evento de búsqueda
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.addEventListener('input', debounce(function() {
        const query = this.value.trim().toLowerCase();
        filterProducts(query);
      }, 300));
    }

    // ==========================
    // Funcionalidad de Ordenamiento (Sorting)
    // ==========================
    const ordenSelect = document.getElementById('orden-select');
    const productosContainer = document.querySelector('.productos');

    function parsePrice(priceString) {
      // Remueve todo excepto números, puntos y comas, luego reemplaza coma por punto
      return parseFloat(priceString.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
    }

    function parseDiscount(discountString) {
      return parseInt(discountString.replace(/[^0-9]/g, '')) || 0;
    }

    function sortProducts(criteria) {
      if (!productosContainer) return;

      const productos = Array.from(productosContainer.querySelectorAll('.producto'));

      productos.sort((a, b) => {
        if (criteria === 'precio-asc') {
          const priceA = parsePrice(a.querySelector('.precio-descuento').textContent);
          const priceB = parsePrice(b.querySelector('.precio-descuento').textContent);
          return priceA - priceB;
        } else if (criteria === 'precio-desc') {
          const priceA = parsePrice(a.querySelector('.precio-descuento').textContent);
          const priceB = parsePrice(b.querySelector('.precio-descuento').textContent);
          return priceB - priceA;
        } else if (criteria === 'descuento') {
          const discountA = parseDiscount(a.querySelector('.descuento').textContent);
          const discountB = parseDiscount(b.querySelector('.descuento').textContent);
          return discountB - discountA;
        }
        return 0;
      });

      // Reordenar en el DOM
      productos.forEach(producto => productosContainer.appendChild(producto));
    }

    if (ordenSelect) {
      ordenSelect.addEventListener('change', (e) => {
        sortProducts(e.target.value);
      });
    }

  });
})();