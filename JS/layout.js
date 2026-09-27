/**
 * layout.js — Header, menú y footer compartidos por todas las páginas de la tienda.
 * Cambiar algo aquí lo cambia en todo el sitio.
 *
 * Uso en cada página:
 *   <body>
 *     <div data-layout="encabezado"></div>
 *     <script src="../JS/layout.js"></script>
 *     ...
 *     <div data-layout="pie"></div>
 */
(function () {
  const PRINCIPALES = [
    ['celulares.html', '📱', 'Celulares'],
    ['gaming.html', '🎮', 'Gaming'],
    ['mouses.html', '💻', 'Computación'],
    ['videos.html', '📺', 'Video'],
    ['audifonos.html', '🎧', 'Audio'],
    ['exclusivo.html', '🎁', 'Exclusivo online']
  ];

  const TODAS = [
    ['celulares.html', 'Celulares'], ['tabletas.html', 'Tabletas'], ['telefonosfijos.html', 'Teléfonos fijos'],
    ['gadget.html', 'Gadgets'], ['laptops.html', 'Laptops'], ['mouses.html', 'Mouses'],
    ['compusaccesorios.html', 'Accesorios de computación'], ['almacenamiento.html', 'Almacenamiento'],
    ['impre.html', 'Impresoras'], ['videos.html', 'Video y TV'], ['accesorios2.html', 'Accesorios de TV'],
    ['audifonos.html', 'Audífonos'], ['audio-personal.html', 'Audio personal'],
    ['audio-para-el-hogar.html', 'Audio para el hogar'], ['audio-profesional.html', 'Audio profesional'],
    ['gaming.html', 'Sillas y escritorios gaming'], ['accesorios.html', 'Accesorios gaming'],
    ['videojuegos.html', 'Videojuegos'], ['exclusivo.html', 'Exclusivo online']
  ];

  const ICONO_USUARIO = `<svg class="icon-user" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2" aria-hidden="true"><circle cx="12" cy="7" r="4"/><path d="M4 21c0-4 8-4 8-4s8 0 8 4"/></svg>`;
  const ICONO_CARRITO = `<svg class="icon-cart" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;

  const paginaActual = location.pathname.split('/').pop() || 'index.html';
  const actual = (href) => (href === paginaActual ? ' aria-current="page"' : '');

  const ENCABEZADO = `
<div class="top-bar" role="complementary" aria-label="Pago en cuotas con bancos aliados">
  <a class="bank" href="pagodecuotas.html">BancoAgrícola</a>
  <a class="bank" href="pagodecuotas.html">CUSCATLAN</a>
  <a class="bank" href="pagodecuotas.html">Caja de Crédito</a>
  <a class="bank" href="pagodecuotas.html">BAC</a>
</div>
<header role="banner" aria-label="Encabezado principal">
  <a href="index.html" class="logo" aria-label="INNOVATECH, ir al inicio">
    <img src="../assets/images/logos/e.webp" alt="INNOVATECH">
  </a>
  <div class="header-left" aria-label="Enlaces de ayuda">
    <a href="sucursal.html"${actual('sucursal.html')}><span aria-hidden="true">📍</span> Sucursales</a>
    <a href="contactenos.html"${actual('contactenos.html')}><span aria-hidden="true">📞</span> Contáctanos</a>
    <a href="formulario.html"${actual('formulario.html')}><span aria-hidden="true">🤔</span> ¿Problemas?</a>
  </div>
  <div class="search-container" role="search" aria-label="Búsqueda de productos">
    <input type="search" name="search" id="search" placeholder="¿Qué estás buscando?" aria-label="Buscar productos" autocomplete="off">
    <button type="button" aria-label="Buscar">🔍</button>
    <div id="autocompleteDropdown"></div>
  </div>
  <button class="mobile-menu-toggle" type="button" aria-label="Abrir menú de categorías" aria-expanded="false" aria-controls="menu-items">☰</button>
  <div class="user-cart" aria-label="Usuario y carrito">
    <a href="inicio.html" id="btn-cuenta" aria-label="Mi cuenta">${ICONO_USUARIO}<span id="nombre-cuenta">Mi cuenta</span></a>
    <a href="carrito.html" id="cart-link" aria-label="Ver carrito de compras" aria-haspopup="true" aria-expanded="false">
      ${ICONO_CARRITO}<span>Mi carrito</span>
      <span class="cart-count" aria-label="Productos en el carrito">0</span>
    </a>
  </div>
  <div class="cart-panel" role="dialog" aria-label="Resumen del carrito" aria-hidden="true" style="display:none;">
    <h3>Tu carrito</h3>
    <ul class="cart-items" aria-live="polite"></ul>
    <div class="cart-total">Total: <span id="cart-total">$0.00</span></div>
    <a href="carrito.html" class="btn-ver-carrito">Ver mi carrito completo</a>
  </div>
</header>
<nav role="navigation" aria-label="Navegación principal">
  <div class="categories-label" tabindex="0" role="button" aria-label="Abrir menú de categorías" aria-haspopup="true" aria-expanded="false" aria-controls="menu-items">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 4h12M2 8h12M2 12h12" stroke="white" stroke-width="2"/></svg>
    CATEGORÍAS
  </div>
  <div class="nav-categories" aria-label="Categorías principales">
    ${PRINCIPALES.map(([href, icono, nombre]) => `<a href="${href}"${actual(href)}><span aria-hidden="true">${icono}</span> ${nombre}</a>`).join('\n    ')}
  </div>
  <div class="menu-items" id="menu-items" aria-label="Todas las categorías">
    ${TODAS.map(([href, nombre]) => `<a href="${href}"${actual(href)}>${nombre}</a>`).join('\n    ')}
  </div>
  <div class="pago-cuota">
    <a href="pagodecuotas.html">Pago de cuota</a>
  </div>
</nav>`;

  const PIE = `
<footer class="footer">
  <div class="footer-container">
    <div class="footer-col">
      <h4>Compra segura</h4>
      <ul>
        <li><a href="por-que-es-seguro.html">¿Por qué es seguro?</a></li>
        <li><a href="por-que-es-comodo.html">¿Por qué es cómodo?</a></li>
      </ul>
      <h4>Eventos</h4>
      <ul>
        <li><a href="exclusivo.html">Exclusivo Innovaparty</a></li>
        <li><a href="que-es-el-innovaparty.html">¿Qué es el Innovaparty?</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Beneficios</h4>
      <ul><li><a href="beneficios.html">Beneficios Innovatech</a></li></ul>
    </div>
    <div class="footer-col">
      <h4>Políticas</h4>
      <ul><li><a href="terminos.html">Términos y condiciones</a></li></ul>
    </div>
    <div class="footer-col">
      <h4>Servicio al cliente</h4>
      <ul>
        <li><a href="formulario.html">Contáctenos</a></li>
        <li><a href="mailto:innvatech24@gmail.com?subject=Consulta%20desde%20la%20web">innvatech24@gmail.com</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Redes sociales</h4>
      <div class="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61581077995128" target="_blank" rel="noopener"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"></a>
        <a href="https://www.instagram.com/innovatech234/" target="_blank" rel="noopener"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="Instagram"></a>
        <a href="https://x.com/INNOVATECH244" target="_blank" rel="noopener"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="X"></a>
      </div>
    </div>
  </div>
  <p class="footer-aviso" style="text-align:center; font-size:13px; opacity:.8; margin:16px 0 0;">
    Proyecto demostrativo. No se procesan ventas reales. Marcas e imágenes pertenecen a sus dueños.
  </p>
</footer>`;

  function reemplazar(nombre, html) {
    const lugar = document.querySelector(`[data-layout="${nombre}"]`);
    if (!lugar) return false;
    lugar.insertAdjacentHTML('beforebegin', html.trim());
    lugar.remove();
    return true;
  }

  function conectarMenu() {
    const etiqueta = document.querySelector('.categories-label');
    const menu = document.getElementById('menu-items');
    const movil = document.querySelector('.mobile-menu-toggle');
    if (!etiqueta || !menu) return;

    const alternar = (abrir) => {
      menu.style.display = abrir ? 'grid' : 'none';
      etiqueta.setAttribute('aria-expanded', String(abrir));
      if (movil) movil.setAttribute('aria-expanded', String(abrir));
    };
    const abierto = () => menu.style.display === 'grid';

    [etiqueta, movil].filter(Boolean).forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        alternar(!abierto());
      });
    });
    etiqueta.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        alternar(!abierto());
      }
    });
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target)) alternar(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') alternar(false);
    });
  }

  function mostrarUsuario() {
    const nombre = localStorage.getItem('nombreUsuario');
    const span = document.getElementById('nombre-cuenta');
    if (nombre && span) span.textContent = nombre;
  }

  // El encabezado se pinta de inmediato (el script va justo después del marcador)
  reemplazar('encabezado', ENCABEZADO);
  conectarMenu();
  mostrarUsuario();

  document.addEventListener('DOMContentLoaded', () => reemplazar('pie', PIE));
})();
