import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import FarmPage from "./pages/FarmPage";
import MapPage from "./pages/MapPage";

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
  const [followed, setFollowed] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [onlyPreorder, setOnlyPreorder] = useState(false);

  const toggleFollow = (name) => {
    if (followed.includes(name)) {
      setFollowed(followed.filter((farmName) => farmName !== name));
    } else {
      setFollowed([...followed, name]);
    }
  };

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
          🪻 Ervas do Sol
        </Link>

        <nav className="nav">
        <span>Quintas</span>
        <span>Produtos</span>
        <Link to="/mapa">Mapa das quintas</Link>
        <span>Sobre nós</span>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">
            Uma comunidade de pequenas quintas portuguesas
          </p>

          <h1>Mais do que comida.</h1>

          <p className="subtitle">
            Ervas do Sol é uma comunidade de pequenas quintas portuguesas.
            Conheça quem cultiva, acompanhe as colheitas e escolha alimentos
            com história.
          </p>

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

        <img
          className="hero-image"
          src="/beelavanda.jpg"
          alt="Lavanda do Ervas do Sol"
        />
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

      <section className="how">
        <div className="tag">Como funciona</div>

        <h2>Siga a vida da sua comida.</h2>

        <div className="how-grid">
          <div className="how-card">
            <div className="how-icon">🌿</div>
            <h3>Descubra a quinta</h3>
            <p>
              Encontre pequenas quintas portuguesas perto de si e conheça quem
              cultiva.
            </p>
          </div>

          <div className="how-card">
            <div className="how-icon">🌱</div>
            <h3>Siga a colheita</h3>
            <p>
              Acompanhe o que foi plantado, quando floresceu e quando estará
              disponível.
            </p>
          </div>

          <div className="how-card">
            <div className="how-icon">📦</div>
            <h3>Receba com história</h3>
            <p>
              Compre ou reserve produtos locais sabendo de onde vêm e quando
              foram colhidos.
            </p>
          </div>
        </div>
      </section>

      <section className="origin">
        <div className="origin-text">
          <div className="tag">A primeira quinta</div>

          <h2>Ervas do Sol</h2>

          <p>
            Sou ucraniana e vivo em Portugal. Durante muitos anos, a lavanda foi
            apenas uma imagem distante: campos roxos algures na Provença, vistos
            a partir de um apartamento no quinto andar, em Kyiv.
          </p>

          <p>
            Hoje estou a criar o meu pequeno jardim de lavanda em Portugal. O
            Ervas do Sol nasceu desse sonho antigo e da vontade de voltar ao
            real: à terra, ao cheiro das plantas, às estações e às pequenas
            histórias que crescem devagar.
          </p>

          <p>
            Antes de ser uma plataforma, o Ervas do Sol é uma procura: conhecer
            quem cultiva, acompanhar a vida das quintas e aproximar as pessoas
            da origem dos seus alimentos.
          </p>

          <Link to="/farm/ervas-do-sol" className="primary link-button">
            Ver a quinta 🌿
          </Link>
        </div>

        <img
          className="origin-image"
          src="/beelavanda.jpg"
          alt="Lavanda com abelha"
        />
      </section>

      <section className="bee-section">
        <div>
          <div className="tag">Lavanda e abelhas</div>

          <h2>Porque é que as abelhas gostam tanto da lavanda?</h2>

          <p>
            A lavanda floresce durante bastante tempo, tem um aroma intenso e
            oferece néctar às abelhas. Para mim, vê-las entre as flores é uma
            das imagens mais bonitas do jardim.
          </p>

          <p>
            Elas lembram-me que a natureza não tem pressa. Cada flor, cada
            estação e cada colheita têm o seu próprio tempo.
          </p>
        </div>

        <div className="season-card">
          <h3>Como passa a estação</h3>

          <div className="season-step">🌱 Primavera — novos rebentos</div>
          <div className="season-step">🪻 Início do verão — floração</div>
          <div className="season-step">🐝 Verão — abelhas e aroma no ar</div>
          <div className="season-step">
            ✂️ Depois da floração — colheita e secagem
          </div>
        </div>
      </section>

      <section className="my-quinta">
        <div className="tag">❤️ A Minha Quinta</div>

        <h2>As quintas que segue</h2>

        {followed.length === 0 ? (
          <p className="subtitle">Ainda não segue nenhuma quinta.</p>
        ) : (
          <div className="followed-list">
            {followed.map((farm) => (
              <div className="followed-item" key={farm}>
                🌿 {farm}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="cta">
        <div>
          <div className="tag">Para produtores locais</div>

          <h2>Conheça quem cultiva.</h2>

          <p className="subtitle">
            Estamos a criar um espaço para pequenas quintas portuguesas
            partilharem as suas histórias, colheitas e produtos.
            <br />
            <br />
            Se tem uma quinta, gostaríamos muito de a conhecer ❤️
          </p>
        </div>

        <a
          className="primary link-button"
          href="https://tally.so/r/MeGrNA"
          target="_blank"
          rel="noreferrer"
        >
          Quero contar a minha história 🌿
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
      <Route path="/mapa" element={<MapPage />} />
    </Routes>
  );
}