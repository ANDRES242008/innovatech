/**
 * catalogo.js — Acceso único a los datos de productos.
 * Todas las páginas leen el catálogo desde aquí (data/productos.json).
 */
(function () {
  const RUTA = '../data/productos.json';
  let promesa = null;

  function cargar() {
    if (!promesa) {
      promesa = fetch(RUTA)
        .then((r) => {
          if (!r.ok) throw new Error('No se pudo cargar el catálogo (HTTP ' + r.status + ')');
          return r.json();
        })
        .catch((error) => {
          promesa = null; // permite reintentar
          throw error;
        });
    }
    return promesa;
  }

  async function producto(id) {
    const datos = await cargar();
    return datos.productos.find((p) => p.id === Number(id)) || null;
  }

  async function categoria(id) {
    const datos = await cargar();
    return datos.categorias.find((c) => c.id === id) || null;
  }

  function dinero(n) {
    return '$' + Number(n || 0).toFixed(2);
  }

  window.Catalogo = { cargar, producto, categoria, dinero };
})();
