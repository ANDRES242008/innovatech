import { useState } from 'react';
import { Layout } from './components/Layout';
import { ProductGrid } from './components/ProductGrid';
import { useCatalogo } from './hooks/useCatalogo';
import type { Producto } from './types';
import './App.css';

const esOferta = (p: Producto) => p.precioOriginal !== null && p.precioOriginal > p.precio;

function App() {
  const { productos, cargando, error } = useCatalogo();
  const [enCarrito, setEnCarrito] = useState(0);
  const [soloOfertas, setSoloOfertas] = useState(false);
  const [ordenarPrecio, setOrdenarPrecio] = useState(false);

  let visibles = soloOfertas ? productos.filter(esOferta) : productos;
  if (ordenarPrecio) {
    visibles = [...visibles].sort((a, b) => a.precio - b.precio);
  }

  return (
    <Layout enCarrito={enCarrito}>
      {cargando && <p className="estado">Cargando productos…</p>}
      {error && <p className="estado">{error}</p>}

      {!cargando && !error && (
        <>
          <h1 className="titulo">Todos los productos</h1>
          <p className="pequeno">
            {visibles.length} de {productos.length} productos
          </p>

          <div className="filtros">
            <button aria-pressed={soloOfertas} onClick={() => setSoloOfertas(!soloOfertas)}>
              {soloOfertas ? 'Ver todos' : 'Solo ofertas'}
            </button>
            <button aria-pressed={ordenarPrecio} onClick={() => setOrdenarPrecio(!ordenarPrecio)}>
              {ordenarPrecio ? 'Orden original' : 'Más baratos primero'}
            </button>
          </div>

          <ProductGrid productos={visibles} onAgregar={() => setEnCarrito((n) => n + 1)} />
        </>
      )}
    </Layout>
  );
}

export default App;