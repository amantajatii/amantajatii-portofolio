export function SiteHeader() {
  return (
    <header className="onda-header" data-animate="nav">
      <a className="wordmark" href="#home" aria-label="Diaz portfolio home">
        amantajatii
      </a>
      <nav aria-label="Primary navigation">
        <a href="#approach">About</a>
        <a href="#work">Work</a>
        <a href="#profile">Stack</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
