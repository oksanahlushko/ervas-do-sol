import "../App.css";
import { Link } from "react-router-dom";

const mapFarms = [
  {
    name: "Ervas do Sol",
    place: "Leiria",
    products: "Lavanda · Chá · Ramos",
    category: "🪻",
    image: "/beelavanda.jpg",
    link: "/farm/ervas-do-sol",
  },
  {
    name: "Quinta do João",
    place: "Batalha",
    products: "Tomates · Legumes · Ervas",
    category: "🍅",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    name: "Quinta da Oliveira",
    place: "Alcobaça",
    products: "Azeite · Azeitonas · Fruta",
    category: "🫒",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    name: "Horta da Ana",
    place: "Marinha Grande",
    products: "Hortícolas · Alfaces · Temperos",
    category: "🥬",
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
];

export default function MapPage() {
  return (
    <div className="map-page">
      <header className="header">
        <Link to="/" className="logo link-logo">
          🪻 Ervas do Sol
        </Link>

        <nav className="nav">
        <Link to="/">Quintas</Link>
        <span>Produtos</span>
        <Link to="/mapa" className="active-nav">
        Mapa das quintas </Link>
        <span>Sobre nós</span>
        </nav>
      </header>

      <main className="map-layout">
        <section className="map-intro">
          <p className="eyebrow">Mapa das Quintas</p>

          <h1>
            Descubra quintas
            <br />
            perto de si 🪻
          </h1>

          <p>
            Apoie produtores locais e escolha alimentos frescos, naturais e
            cheios de história.
          </p>
        </section>

        <section className="map-content">
          <div className="map-card">
            <div className="map-controls">
              <button>+</button>
              <button>−</button>
            </div>

            <div className="map-label porto">Porto</div>
            <div className="map-label coimbra">Coimbra</div>
            <div className="map-label leiria">Leiria</div>
            <div className="map-label lisboa">Lisboa</div>

            <div className="map-pin pin-leiria">🪻</div>
            <div className="map-pin pin-batalha">🍅</div>
            <div className="map-pin pin-alcobaca">🫒</div>
            <div className="map-pin pin-marinha">🥬</div>

            <div className="map-legend">
              <div>🪻 Ervas e flores</div>
              <div>🍅 Frutas e legumes</div>
              <div>🫒 Azeite e frutos</div>
              <div>🥬 Hortícolas</div>
            </div>
          </div>

          <aside className="farm-list">
            <div className="found-count">🌿 {mapFarms.length} quintas encontradas</div>

            {mapFarms.map((farm) => (
              <div className="map-farm-card" key={farm.name}>
                <img src={farm.image} alt={farm.name} />

                <div>
                  <h3>
                    <span>{farm.category}</span> {farm.name}
                  </h3>

                  <p>{farm.place}</p>

                  <p>{farm.products}</p>

                  {farm.link === "#" ? (
                    <button>Ver quinta</button>
                  ) : (
                    <Link to={farm.link} className="mini-link-button">
                      Ver quinta
                    </Link>
                  )}
                </div>

                <span className="heart">♡</span>
              </div>
            ))}
          </aside>
        </section>

        <section className="map-values">
          <div>
            <span>🌿</span>
            <h3>Produção natural</h3>
            <p>Com respeito pela natureza.</p>
          </div>

          <div>
            <span>♡</span>
            <h3>Pequenas quintas</h3>
            <p>Apoiamos famílias e produtores locais.</p>
          </div>

          <div>
            <span>🌸</span>
            <h3>Sazonal</h3>
            <p>Produtos frescos na época certa.</p>
          </div>

          <div>
            <span>☀️</span>
            <h3>Com amor</h3>
            <p>Mais do que comida, uma história.</p>
          </div>
        </section>
      </main>
    </div>
  );
}