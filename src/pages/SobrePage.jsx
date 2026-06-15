import "../App.css";
import { Link } from "react-router-dom";

export default function SobrePage() {
  return (
    <div className="sobre-page">
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

      <section className="sobre-hero">
        <div className="sobre-hero-text">
          <p className="eyebrow">Sobre nós</p>

          <h1>Mais do que comida.</h1>

          <p>
            Ervas do Sol nasceu para aproximar pessoas de pequenas quintas
            portuguesas. Queremos mostrar não só produtos, mas também quem
            cultiva, quando nasce a colheita e como cada alimento chega até si.
          </p>
        </div>

        <img
          src="/beelavanda.jpg"
          alt="Lavanda numa pequena quinta"
          className="sobre-hero-image"
        />
      </section>

      <section className="sobre-mission">
        <h2>Porque é mais do que comida</h2>

        <div className="sobre-mission-grid">
          <div className="sobre-mission-card">
            <div className="sobre-icon-circle">👥</div>

            <h3>Histórias reais</h3>

            <p>Cada produto tem pessoas, estações e cuidado por trás.</p>
          </div>

          <div className="sobre-mission-card">
            <div className="sobre-icon-circle">🕰️</div>

            <h3>Tempo e origem</h3>

            <p>
              Queremos mostrar quando algo foi plantado, cresceu, secou,
              amadureceu e ficou disponível.
            </p>
          </div>

          <div className="sobre-mission-card">
            <div className="sobre-icon-circle">🏡</div>

            <h3>Pequenas quintas</h3>

            <p>
              Ajudamos quintas locais a partilhar a sua história e a
              aproximar-se de quem valoriza produtos com identidade.
            </p>
          </div>
        </div>
      </section>

      <section className="sobre-first-farm">
        <div>
          <p className="eyebrow">A primeira quinta</p>

          <h2>Ervas do Sol</h2>

          <p>
            Sou ucraniana e vivo em Portugal. Durante muitos anos, a lavanda foi
            apenas uma imagem distante: campos roxos algures na Provença, vistos
            a partir de um apartamento no quinto andar, em Kyiv.
          </p>

          <p>
            Hoje estou a criar o meu pequeno jardim de lavanda em Portugal.
            O Ervas do Sol nasceu desse sonho antigo e da vontade de voltar ao
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
          src="/photo5.jpg"
          alt="Lavanda com abelha"
          className="sobre-first-image"
        />
      </section>

      <section className="sobre-cta">
        <div>
          <div className="tag">Para quintas</div>

          <h2>Tem uma quinta?</h2>

          <p>
            Se cultiva ou produz em pequena escala, gostaríamos muito de
            conhecer a sua história.
          </p>
        </div>

        <a
          className="sobre-cta-button"
          href="https://tally.so/r/MeGrNA"
          target="_blank"
          rel="noreferrer"
        >
          Contar a minha história 🌿
        </a>
      </section>
    </div>
  );
}