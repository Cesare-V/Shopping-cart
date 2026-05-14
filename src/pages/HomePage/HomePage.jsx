import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <main className="home-page">
      <div className="hero">
        <h1>Benvenuto su IlMioNegozio! 🛍️</h1>
        <p>Scopri la nostra selezione di prodotti di qualità a prezzi imbattibili.</p>
        <Link to="/shop" className="hero-btn">Vai allo Shop</Link>
      </div>
      <div className="features">
        <div className="feature-card">
          <span>🚚</span>
          <h3>Spedizione Gratuita</h3>
          <p>Su tutti gli ordini sopra i €50</p>
        </div>
        <div className="feature-card">
          <span>🔒</span>
          <h3>Pagamenti Sicuri</h3>
          <p>Le tue transazioni sono sempre protette</p>
        </div>
        <div className="feature-card">
          <span>↩️</span>
          <h3>Resi Facili</h3>
          <p>30 giorni per cambiare idea</p>
        </div>
      </div>
    </main>
  );
}

export default HomePage;