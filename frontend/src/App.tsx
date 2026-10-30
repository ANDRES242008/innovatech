import { useEffect, useState } from 'react';
import { ProductCard } from './components/ProductCard';
import type { Catalogo, Producto } from './types';
import './App.css';

// Rutas del JSON apuntan a la tienda vanilla. Aquí las adaptamos.
function arreglarImagen(producto: Producto): Producto {
  const ruta = producto.imagen || Object.values(producto.imagenes)[0] || '';
  return { ...producto, imagen: ruta.replace('../assets/images/', '/images/') };
}

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enCarrito, setEnCarrito] = useState(0);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('HTTP ' + respuesta.status);
        return respuesta.json() as Promise<Catalogo>;
      })
      .then((datos) => setProductos(datos.productos.map(arreglarImagen)))
      .catch(() => setError('No se pudo cargar el catálogo.'))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p className="estado">Cargando productos…</p>;
  if (error) return <p className="estado">{error}</p>;

  return (
    <main>
      <h1 className="titulo">INNOVATECH</h1>
      <p className="pequeno">
        {productos.length} productos · En carrito: {enCarrito}
      </p>
      <div className="grid">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} onAgregar={() => setEnCarrito((n) => n + 1)} />
        ))}
      </div>
    </main>
  );
}

export default App;