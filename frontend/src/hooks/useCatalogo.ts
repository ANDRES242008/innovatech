import { useEffect, useState } from 'react';
import type { Catalogo, Categoria, Producto } from '../types';

function arreglarImagen(producto: Producto): Producto {
  const ruta = producto.imagen || Object.values(producto.imagenes)[0] || '';
  return { ...producto, imagen: ruta.replace('../assets/images/', '/images/') };
}

export function useCatalogo() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('HTTP ' + respuesta.status);
        return respuesta.json() as Promise<Catalogo>;
      })
      .then((datos) => {
        setProductos(datos.productos.map(arreglarImagen));
        setCategorias(datos.categorias);
      })
      .catch(() => setError('No se pudo cargar el catálogo.'))
      .finally(() => setCargando(false));
  }, []);

  return { productos, categorias, cargando, error };
}