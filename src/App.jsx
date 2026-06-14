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
    tag: "☀️ Quinta fundadora",
    image: "/beelavanda.jpg",
  },
  {
    name: "Quinta do João",
    place: "Batalha",
    products: "Tomates · Pepinos · Legumes",
    tag: "🍅 Primeira colheita",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Quinta da Oliveira",
    place: "Alcobaça",
    products: "Azeite · Ervas · Fruta",
    tag: "🌿 Nova colheita",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
  },
];

function HomePage() {
  const [followed, setFollowed] = useState([]);

  const toggleFollow = (name) => {
    if (followed.includes(name)) {
      setFollowed(followed.filter((f) => f !== name));
    } else {
      setFollowed([...followed, name]);
    }
  };

  return (
    <div className="page">
      <header className="header">
        <Link to="/" className="logo link-logo">
          🪻 Ervas do Sol
        </Link>

        <nav className="nav">
          <span>Quintas</span>
          <Link to="/mapa">Mapa das quintas</Link>
          <span>Histórias</span>
          <span>Sobre o projeto</span>
          <a href="https://tally.so/r/MeGrNA" target="_blank" rel="noreferrer">
            Para Quintas
          </a>
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
            apenas uma imagem distante: campos roxos algures na Provença,
            vistos a partir de um apartamento no quinto andar, em Kyiv.
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

      <section className="section">
        <h2>O que procura hoje?</h2>

        <div className="categories">
          {[
            "🍅 Tomates",
            "🪻 Lavanda",
            "🍯 Mel",
            "🌿 Ervas",
            "🥚 Ovos",
            "🫒 Azeite",
          ].map((item) => (
            <div className="category" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Quintas perto de si</h2>

        <div className="grid">
          {farms.map((farm) => (
            <div className="card" key={farm.name}>
              <img src={farm.image} className="card-image" alt={farm.name} />

              <div className="card-body">
                <div className="tag">{farm.tag}</div>

                <h3>{farm.name}</h3>

                <p>📍 {farm.place}</p>

                <p>{farm.products}</p>

                <button
                  className={
                    followed.includes(farm.name) ? "follow active" : "follow"
                  }
                  onClick={() => toggleFollow(farm.name)}
                >
                  {followed.includes(farm.name)
                    ? "A seguir ❤️"
                    : "Seguir quinta"}
                </button>

                {farm.name === "Ervas do Sol" && (
                  <Link to="/farm/ervas-do-sol" className="farm-link">
                    Ver Quinta →
                  </Link>
                )}
              </div>
            </div>
          ))}
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