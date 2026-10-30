import type { Producto } from '../types';

interface Props {
  producto: Producto;
  onAgregar: (id: number) => void;
}

export function ProductCard({ producto, onAgregar }: Props) {
  const descuento = producto.precioOriginal
    ? Math.round((1 - producto.precio / producto.precioOriginal) * 100)
    : 0;

  return (
    <article className="card">
      {descuento > 0 && <span className="badge">-{descuento}%</span>}
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="precio">${producto.precio.toFixed(2)}</p>
      {producto.precioOriginal && (
        <p className="original">${producto.precioOriginal.toFixed(2)}</p>
      )}
      <button onClick={() => onAgregar(producto.id)}>Agregar al carrito</button>
    </article>
  );
}