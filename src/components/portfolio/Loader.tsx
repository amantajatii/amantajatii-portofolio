export function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-inner">
        <p className="loader-mark">amantajatii</p>
        <div className="loader-words">
          <span>Frontend</span>
          <span>Web3</span>
          <span>AI products</span>
        </div>
        <div className="loader-bottom">
          <span className="loader-count">00</span>
          <div className="loader-track">
            <span className="loader-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
