export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {anio} INNOVATECH</p>
      <p className="pequeno">Proyecto demostrativo. No se procesan ventas reales.</p>
    </footer>
  );
}