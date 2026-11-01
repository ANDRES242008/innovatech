import type { Producto } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
  productos: Producto[];
  onAgregar: (id: number) => void;
}

export function ProductGrid({ productos, onAgregar }: Props) {
  if (productos.length === 0) {
    return <p className="estado">No hay productos para mostrar.</p>;
  }

  return (
    <div className="grid">
      {productos.map((p) => (
        <ProductCard key={p.id} producto={p} onAgregar={onAgregar} />
      ))}
    </div>
  );
}