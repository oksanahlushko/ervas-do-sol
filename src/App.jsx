import "./App.css";
import { useState } from "react";

const farms = [
  {
    name: "Quinta da Maria",
    place: "Leiria",
    products: "Lavanda · Mel · Ervas",
    tag: "🪻 Atualizado hoje",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=900&q=80",
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

export default function App() {
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
        <div className="logo">🪻 Ervas do Sol</div>

        <nav className="nav">
          <span>Quintas</span>
          <span>Produtos</span>
          <span>Histórias</span>
          <span>A Minha Quinta</span>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">Versão beta · Quintas locais de Portugal</p>

          <h1>Mais do que comida.</h1>

          <p className="subtitle">
            Histórias, estações e pequenas quintas portuguesas. Descubra quem
            cultiva, acompanhe as colheitas e escolha alimentos com história.
          </p>

          <div className="buttons">
            <button className="primary">Explorar Quintas 🌿</button>

            <button className="secondary">❤️ Seguir Colheitas</button>
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
              <img src={farm.image} className="card-image" alt="" />

              <div className="card-body">
                <div className="tag">{farm.tag}</div>

                <h3>{farm.name}</h3>

                <p>📍 {farm.place}</p>

                <p>{farm.products}</p>

                <button
                  className={followed.includes(farm.name) ? "follow active" : "follow"}
                  onClick={() => toggleFollow(farm.name)}
                >
                  {followed.includes(farm.name)
                    ? "A seguir ❤️"
                    : "Seguir quinta"}
                </button>
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