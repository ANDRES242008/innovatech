(function() {
  document.addEventListener('DOMContentLoaded', () => {

   

    // ==========================
    // 2. Carrito de Compras (TU NUEVA VERSIÓN CON NOTIFICACIONES)
    // ==========================
    (function initCart() {
      const cartKey = 'shoppingCart';

      // Definimos la función auxiliar aquí para que todo funcione
      function safeParseJSON(str, fallback) {
        try {
          return str ? JSON.parse(str) : fallback;
        } catch (e) {
          return fallback;
        }
      }

      function getCart() {
        return safeParseJSON(localStorage.getItem(cartKey), []);
      }

      function saveCart(cart) {
        try {
          localStorage.setItem(cartKey, JSON.stringify(cart));
        } catch (e) {
          console.warn('Error guardando carrito', e);
        }
      }

      function addToCart(product, quantity = 1) {
        const cart = getCart();
        // Usamos un ID robusto o generamos uno si falta
        const pid = product.id || product.dataProductId || ('p_' + (product.url || product.title || Math.random()).toString().slice(0, 12));
        
        const existing = cart.find(item => item.id === pid);

        if (existing) {
          existing.quantity += quantity;
        } else {
          // Aseguramos guardar el ID generado
          cart.push({ ...product, id: pid, quantity });
        }

        saveCart(cart);
        updateCartUI();
        showNotification(`${product.name || 'Producto'} agregado al carrito`);
      }

      function removeFromCart(productId) {
        let cart = getCart();
        // Convertimos a string ambos para comparar seguramente
        cart = cart.filter(item => String(item.id) !== String(productId));
        saveCart(cart);
        updateCartUI();
      }

      function updateCartUI() {
        const cart = getCart();
        const cartCountElem = document.querySelector('.cart-count');
        const cartItemsElem = document.querySelector('.cart-items');
        const cartTotalElem = document.getElementById('cart-total');

        if (!cartCountElem || !cartItemsElem || !cartTotalElem) return;

        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        cartCountElem.textContent = totalItems;
        cartCountElem.style.display = totalItems > 0 ? 'inline-flex' : 'none';

        cartItemsElem.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
          cartItemsElem.innerHTML = '<li style="text-align:center;color:#888;padding:20px;list-style:none;">Tu carrito está vacío</li>';
        } else {
          cart.forEach(item => {
            const li = document.createElement('li');
            const priceNum = parseFloat((item.priceDescuento || item.price || '0').toString().replace(/[^0-9.-]+/g, "")) || 0;
            total += priceNum * (item.quantity || 0);

            li.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding:8px;background:#f9f9f9;border-radius:6px;list-style:none;';
            
            // IMPORTANTE: He agregado comillas simples '${item.id}' en removeFromCart para evitar errores
            li.innerHTML = `
              <div style="flex:1;">
                <div style="font-weight:600;font-size:14px;">${item.name || 'Producto'}</div>
                <div style="font-size:13px;color:#666;">${item.quantity}x ${item.priceDescuento || item.price || '$0'}</div>
              </div>
              <button onclick="window.cart.removeFromCart('${item.id}')" style="background:#ff3b3f;color:#fff;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;">✕</button>
            `;
            cartItemsElem.appendChild(li);
          });
        }

        cartTotalElem.textContent = `$${total.toFixed(2)}`;
      }

      function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
          position: fixed;
          top: 100px;
          right: 20px;
          background: #1D1ABE;
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 10000;
          font-weight: 600;
          animation: slideInNotif 0.3s ease;
        `;
        document.body.appendChild(notification);

        const style = document.createElement('style');
        style.textContent = `
          @keyframes slideInNotif {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `;
        if (!document.querySelector('style[data-notif]')) {
          style.setAttribute('data-notif', 'true');
          document.head.appendChild(style);
        }

        setTimeout(() => {
          notification.style.opacity = '0';
          notification.style.transform = 'translateX(100%)';
          notification.style.transition = 'all 0.3s ease';
          setTimeout(() => notification.remove(), 300);
        }, 2500);
      }

      // Panel del carrito
      const cartLink = document.querySelector('a[aria-label="Ver mi carrito de compras"]') || 
                       document.getElementById('cart-link');
      const cartPanel = document.querySelector('.cart-panel');

      if (cartLink && cartPanel) {
        // Estado inicial
        if (!cartPanel.style.display) cartPanel.style.display = 'none';

        cartLink.addEventListener('click', (e) => {
          e.preventDefault();
          cartPanel.style.display = cartPanel.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', (e) => {
          if (!cartPanel.contains(e.target) && !cartLink.contains(e.target)) {
            cartPanel.style.display = 'none';
          }
        });
      }

      // Exponer funciones globalmente
      window.cart = {
        addToCart,
        removeFromCart,
        updateCartUI,
        getCart
      };

      // Inicializar UI
      updateCartUI();
    })();


    // ==========================
    // 3. Funciones de Búsqueda
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

      cards.forEach(card => {
        const titleEl = card.querySelector('.card-title');
        const title = titleEl.textContent.toLowerCase();
        const match = title.includes(query);
        card.style.display = match ? 'block' : 'none';
        highlightText(titleEl, query);
        if (match) anyVisible = true;
      });

      productos.forEach(producto => {
        const nameEl = producto.querySelector('.nombre-producto');
        const name = nameEl.textContent.toLowerCase();
        const match = name.includes(query);
        producto.style.display = match ? 'block' : 'none';
        highlightText(nameEl, query);
        if (match) anyVisible = true;
      });

      let noResults = document.querySelector('.no-results-message');
      if (!noResults) {
        noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.style.color = 'red';
        noResults.style.fontWeight = 'bold';
        noResults.style.marginTop = '1em';
        noResults.textContent = 'No se encontraron resultados.';
        const productosContainer = document.querySelector('.productos');
        if (productosContainer) {
          productosContainer.parentNode.insertBefore(noResults, productosContainer.nextSibling);
        }
      }

      noResults.style.display = anyVisible ? 'none' : 'block';
    }

    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.addEventListener('input', debounce(function() {
        const query = this.value.trim().toLowerCase();
        filterProducts(query);
      }, 300));
    }


    // ==========================
    // 4. Ordenamiento (Sorting)
    // ==========================
    const ordenSelect = document.getElementById('orden-select');
    const productosContainer = document.querySelector('.productos');

    function parsePrice(priceString) {
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

      productos.forEach(producto => productosContainer.appendChild(producto));
    }

    if (ordenSelect) {
      ordenSelect.addEventListener('change', (e) => {
        sortProducts(e.target.value);
      });
    }

  });
})();