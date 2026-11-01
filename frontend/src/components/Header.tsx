interface Props {
  enCarrito: number;
}

export function Header({ enCarrito }: Props) {
  return (
    <header className="header">
      <div className="header-contenido">
        <a href="/" className="logo">
          <img src="/favicon.png" alt="" />
          <span>INNOVATECH</span>
        </a>
        <div className="header-carrito" aria-label={`Carrito: ${enCarrito} productos`}>
          <span aria-hidden="true">🛒</span>
          <span className="contador">{enCarrito}</span>
        </div>
      </div>
    </header>
  );
}