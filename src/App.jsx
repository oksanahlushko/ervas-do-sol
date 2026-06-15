import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import FarmPage from "./pages/FarmPage";
import MapPage from "./pages/MapPage";
import SobrePage from "./pages/SobrePage";
import ProductPage from "./pages/ProductPage";

const farms = [
  {
    name: "Ervas do Sol",
    place: "Leiria",
    products: "Chá de Lavanda · Ramos de Lavanda",
    productList: ["lavanda", "chá de lavanda", "ramos de lavanda"],
    status: "available",
    statusLabel: "Disponível agora",
    availabilityText: "Ramos de lavanda disponíveis hoje",
    preorder: true,
    image: "/beelavanda.jpg",
    link: "/farm/ervas-do-sol",
  },
  {
    name: "Quinta do João",
    place: "Batalha",
    products: "Tomates · Pepinos · Legumes",
    productList: ["tomates", "tomate", "pepinos", "legumes"],
    status: "growing",
    statusLabel: "Em crescimento",
    availabilityText: "Tomates disponíveis a partir de 1 de julho",
    preorder: true,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Quinta da Oliveira",
    place: "Alcobaça",
    products: "Azeite · Ervas · Fruta",
    productList: ["azeite", "ervas", "fruta", "azeitonas"],
    status: "available",
    statusLabel: "Disponível agora",
    availabilityText: "Azeite e ervas disponíveis agora",
    preorder: false,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Campo das Abelhas",
    place: "Mértola",
    products: "Mel · Ervas silvestres · Alecrim",
    productList: ["mel", "ervas", "ervas silvestres", "alecrim"],
    status: "available",
    statusLabel: "Disponível agora",
    availabilityText: "Mel disponível agora",
    preorder: false,
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Quinta dos Ovos",
    place: "Leiria",
    products: "Ovos · Hortícolas · Ervas frescas",
    productList: ["ovos", "hortícolas", "horticolas", "ervas"],
    status: "available",
    statusLabel: "Disponível agora",
    availabilityText: "Ovos disponíveis esta semana",
    preorder: true,
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=900&q=80",
  },
];

const productTags = [
  { label: "🍅 Tomates", value: "tomates" },
  { label: "🪻 Lavanda", value: "lavanda" },
  { label: "🍯 Mel", value: "mel" },
  { label: "🌿 Ervas", value: "ervas" },
  { label: "🥚 Ovos", value: "ovos" },
  { label: "🫒 Azeite", value: "azeite" },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [onlyPreorder, setOnlyPreorder] = useState(false);

  const chooseCategory = (category) => {
    if (searchTerm === category) {
      setSearchTerm("");
    } else {
      setSearchTerm(category);
    }
  };

  const toggleStatus = (status) => {
    if (selectedStatus === status) {
      setSelectedStatus("all");
    } else {
      setSelectedStatus(status);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedStatus("all");
    setOnlyPreorder(false);
  };

  const filteredFarms = farms.filter((farm) => {
    const normalizedSearch = searchTerm.toLowerCase().trim();

    const matchesSearch =
      normalizedSearch === "" ||
      farm.name.toLowerCase().includes(normalizedSearch) ||
      farm.place.toLowerCase().includes(normalizedSearch) ||
      farm.products.toLowerCase().includes(normalizedSearch) ||
      farm.productList.some((product) =>
        product.toLowerCase().includes(normalizedSearch)
      );

    const matchesStatus =
      selectedStatus === "all" || farm.status === selectedStatus;

    const matchesPreorder = !onlyPreorder || farm.preorder;

    return matchesSearch && matchesStatus && matchesPreorder;
  });

  return (
    <div className="page">
      <header className="header">
  <Link to="/" className="logo link-logo">
    <span className="logo-icon">🌿</span>
    <span>Ervas do Sol</span>
  </Link>

  <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-toggle" />

  <label htmlFor="mobile-menu-toggle" className="mobile-menu-button">
    ☰
  </label>

  <nav className="nav">
    <Link to="/">Quintas</Link>
    <span>Produtos</span>
    <Link to="/mapa">Mapa das quintas</Link>
    <Link to="/sobre">Sobre nós</Link>
  </nav>
</header>

      <section className="hero hero-new">
  <div className="hero-content">
    <h1>Mais do que comida.</h1>

    <div className="hero-points">
      <p>🌿 Conheça quem cultiva.</p>
      <p>🌿 Acompanhe as colheitas.</p>
      <p>🌿 Descubra produtos locais com história.</p>
    </div>

    <p className="subtitle hero-description">
      Do primeiro broto até à sua mesa, queremos aproximá-lo das pequenas
      quintas portuguesas e das pessoas que fazem nascer cada produto com
      tempo, dedicação e amor pela terra.
    </p>

    <p className="hero-final-line">Siga a vida da sua comida. 🌿</p>

    <div className="buttons">
      <Link to="/mapa" className="primary link-button">
        Explorar Quintas 🌿
      </Link>

      <a
        className="secondary link-button"
        href="https://tally.so/r/MeGrNA"
        target="_blank"
        rel="noreferrer"
      >
        Tenho uma quinta
      </a>
    </div>
  </div>

  <div className="hero-image-shape">
    <img src="/beelavanda.jpg" alt="Lavanda do Ervas do Sol" />
  </div>
</section>

      <section className="home-search">
        <div className="home-search-panel">
          <input
            type="text"
            className="home-search-input"
            placeholder="Procurar produtos, quintas ou colheitas..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="home-search-filters">
            <button
              type="button"
              className={
                selectedStatus === "available"
                  ? "home-filter available active"
                  : "home-filter available"
              }
              onClick={() => toggleStatus("available")}
            >
              ● Disponível agora
            </button>

            <button
              type="button"
              className={
                selectedStatus === "drying"
                  ? "home-filter drying active"
                  : "home-filter drying"
              }
              onClick={() => toggleStatus("drying")}
            >
              ● Em secagem
            </button>

            <button
              type="button"
              className={
                selectedStatus === "growing"
                  ? "home-filter growing active"
                  : "home-filter growing"
              }
              onClick={() => toggleStatus("growing")}
            >
              ● Em crescimento
            </button>

            <label className="home-preorder-filter">
              <input
                type="checkbox"
                checked={onlyPreorder}
                onChange={(event) => setOnlyPreorder(event.target.checked)}
              />
              Com pré-reserva
            </label>
          </div>

          <div className="home-product-tags">
            {productTags.map((item) => (
              <button
                type="button"
                className={
                  searchTerm === item.value
                    ? "home-product-tag active"
                    : "home-product-tag"
                }
                key={item.value}
                onClick={() => chooseCategory(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section quintas-results-section">
        <p className="eyebrow">Quintas da comunidade</p>

        <h2>Quintas perto de si</h2>

        <p className="results-count">
          {filteredFarms.length === 1
            ? "1 quinta encontrada"
            : `${filteredFarms.length} quintas encontradas`}
        </p>

        {filteredFarms.length === 0 ? (
          <div className="empty-results">
            <p>
              Não encontrámos quintas com estes filtros. Experimente procurar
              por outro produto ou limpar os filtros.
            </p>

            <button type="button" onClick={clearFilters}>
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className="grid">
            {filteredFarms.map((farm) => (
              <div className="card" key={farm.name}>
                <img src={farm.image} className="card-image" alt={farm.name} />

                <div className="card-body">
                  <div className={`farm-status ${farm.status}`}>
                    {farm.statusLabel}
                  </div>

                  <h3>{farm.name}</h3>

                  <p className="farm-place">📍 {farm.place}</p>

                  <p className="farm-products-line">{farm.products}</p>

                  <p className="availability-line">{farm.availabilityText}</p>

                  <div className="card-actions">
                    {farm.link ? (
                      <Link to={farm.link} className="card-main-link">
                        Ver quinta →
                      </Link>
                    ) : farm.preorder ? (
                      <button
                        type="button"
                        className="card-main-button preorder-card-button"
                      >
                        Pré-reservar
                      </button>
                    ) : (
                      <button type="button" className="card-main-button">
                        Ver quinta
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="home-farm-cta">
  <div className="home-farm-cta-content">
    <div className="tag home-farm-cta-tag">Para quintas</div>

    <h2>Tem uma quinta?</h2>

    <p>
      Se cultiva ou produz em pequena escala, gostaríamos muito de conhecer
      a sua história.
    </p>
  </div>

  <a
    className="home-farm-cta-button"
    href="https://tally.so/r/MeGrNA"
    target="_blank"
    rel="noreferrer"
  >
    Contar a minha história 🌿
  </a>
</section>

      <footer className="footer">
        <div className="logo">🪻 Ervas do Sol</div>

        <p>Histórias, estações e pequenas quintas portuguesas.</p>

        <p>Feito com ❤️ em Portugal</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/farm/ervas-do-sol" element={<FarmPage />} />
      <Route path="/quintas/ervas-do-sol" element={<FarmPage />} />

      <Route path="/mapa" element={<MapPage />} />
      <Route path="/sobre" element={<SobrePage />} />

      <Route
        path="/quintas/ervas-do-sol/produtos/cha-de-lavanda"
        element={<ProductPage />}
      />
    </Routes>
  );
}