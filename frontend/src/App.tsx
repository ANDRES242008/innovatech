import { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import type { Producto } from './types';
import './App.css';

const productos: Producto[] = [
  { id: 16, nombre: 'Nothing Phone 1', precio: 690, precioOriginal: 790, imagen: '/productos/nothing-phone-1.webp' },
  { id: 17, nombre: 'Galaxy S24 Ultra', precio: 1000, precioOriginal: 1200, imagen: '/productos/24blanco.webp' },
  { id: 18, nombre: 'Galaxy A55 5G', precio: 450.99, precioOriginal: null, imagen: '/productos/galaxy-a-55-blanco.webp' },
];

function App() {
  const [enCarrito, setEnCarrito] = useState(0);

  return (
    <main>
      <h1>INNOVATECH</h1>
      <p>Productos en carrito: {enCarrito}</p>
      <div className="grid">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} onAgregar={() => setEnCarrito((n) => n + 1)} />
        ))}
      </div>
    </main>
  );
}

export default App;