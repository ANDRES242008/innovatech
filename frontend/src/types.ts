export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  precioOriginal: number | null;
  imagen: string;
  imagenes: Record<string, string>;
  especificaciones: Record<string, string>;
}

export interface Categoria {
  id: string;
  nombre: string;
  pagina: string;
  total: number;
}

export interface Catalogo {
  version: number;
  categorias: Categoria[];
  productos: Producto[];
}