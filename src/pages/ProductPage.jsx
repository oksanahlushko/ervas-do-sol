import "../App.css";
import { Link } from "react-router-dom";

const relatedProducts = [
  {
    name: "Ramos de Lavanda",
    description: "Ramos secos para decorar e perfumar a casa.",
    image: "/quintabee.jpg",
    link: "/quintas/ervas-do-sol/produtos/ramos-de-lavanda",
  },
  {
    name: "Lavanda seca",
    description: "Flores secas de lavanda para sachês, decoração e infusões.",
    image: "/photo3.jpg",
    link: "/quintas/ervas-do-sol/produtos/lavanda-seca",
  },
];

export default function ProductPage() {
  return (
    <div className="product-page">
      <header className="header">
        <Link to="/" className="logo link-logo">
          <span className="logo-icon">🌿</span>
          <span>Ervas do Sol</span>
        </Link>

        <input
          type="checkbox"
          id="mobile-menu-toggle"
          className="mobile-menu-toggle"
        />

        <label htmlFor="mobile-menu-toggle" className="mobile-menu-button">
          ☰
        </label>

        <nav className="nav">
          <Link to="/">Quintas</Link>
          <span className="active-nav">Produtos</span>
          <Link to="/mapa">Mapa das quintas</Link>
          <Link to="/sobre">Sobre nós</Link>
        </nav>
      </header>

      <main className="product-detail">
        <div className="product-breadcrumbs">
          <Link to="/">Início</Link>
          <span>›</span>
          <Link to="/quintas/ervas-do-sol">Ervas do Sol</Link>
          <span>›</span>
          <span>Chá de Lavanda</span>
        </div>

        <section className="product-main">
          <div className="product-media">
            <img
              src="/photo4.jpg"
              alt="Chá de Lavanda"
              className="product-main-image"
            />

            <div className="product-thumbs">
              <img src="/photo4.jpg" alt="Lavanda seca para chá" />
              <img src="/photo3.jpg" alt="Flores de lavanda" />
              <img src="/beelavanda.jpg" alt="Lavanda no jardim" />
              <img src="/quintabee.jpg" alt="Ramos de lavanda" />
            </div>
          </div>

          <div className="product-summary">
            <Link to="/quintas/ervas-do-sol" className="back-to-farm">
              ← Voltar à quinta
            </Link>

            <p className="eyebrow">Ervas aromáticas</p>

            <h1>Chá de Lavanda</h1>

            <div className="product-farm-line">
              <span>🌿 Ervas do Sol</span>
              <span>📍 Leiria, Portugal</span>
            </div>

            <p className="product-description">
              Flores secas de lavanda para infusões aromáticas, delicadas e relaxantes.
  Colhidas em pequena escala e secas naturalmente, com tempo e cuidado.
            </p>

            <div className="product-availability-card">
  <div>
    <span className="product-status drying-status">● Em secagem</span>
  </div>

  <div>
    <p>Pronto a partir de</p>
    <strong>24 de junho</strong>
  </div>
</div>

            <div className="product-buy-box">
              <div>
                <div className="product-price">€6,50</div>
                <div className="product-unit">/ 50g</div>
                <div className="product-small-price">Produção pequena e sazonal</div>
              </div>

              <div className="product-quantity">
  <button type="button">−</button>
  <span>1</span>
  <button type="button">+</button>
</div>

              <button type="button" className="product-main-action">
                Pré-reservar
              </button>

              <div className="product-secondary-actions">
                <button type="button">♡ Guardar</button>

                <Link to="/quintas/ervas-do-sol">🌿 Ver a quinta</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="product-benefits">
          <div>
            <span>🌿</span>
            <strong>Secagem natural</strong>
            <p>Seco lentamente, sem pressa e sem aditivos.</p>
          </div>

          <div>
            <span>🤲</span>
            <strong>Colheita manual</strong>
            <p>Colhido em pequena escala, com cuidado.</p>
          </div>

          <div>
            <span>☕</span>
            <strong>Para infusões</strong>
            <p>Aroma floral, delicado e relaxante.</p>
          </div>

          <div>
            <span>📅</span>
            <strong>Pré-reserva</strong>
            <p>Reserve antes de estar totalmente seco.</p>
          </div>
        </section>

        <section className="product-info-section">
          <div className="product-tabs">
            <button type="button" className="active">
              Descrição
            </button>
            <button type="button">Como usar</button>
            <button type="button">Sobre a quinta</button>
          </div>

          <div className="product-info-grid">
            <div className="product-text-card">
              <p>
                A lavanda é colhida à mão quando as flores estão no ponto certo
                de aroma. Depois, fica a secar naturalmente num local arejado,
                longe do sol direto, para preservar a cor, o cheiro e a
                delicadeza das flores.
              </p>

              <p>
                Este chá é ideal para momentos de pausa, fim do dia ou pequenas
                rotinas de calma. Tem um aroma floral intenso e deve ser usado
                em pequenas quantidades.
              </p>

              <div className="traditional-benefits">
                <span>🪻</span>

                <div>
                  <strong>Uso tradicional</strong>

                  <p>
                    A lavanda é tradicionalmente associada ao relaxamento e ao
                    bem-estar. Não substitui aconselhamento médico.
                  </p>
                </div>
              </div>
            </div>

            <div className="farm-about-card">
              <h3>Sobre a quinta</h3>

              <img src="/beelavanda.jpg" alt="Ervas do Sol" />

              <p>
                O Ervas do Sol é uma pequena quinta em Leiria, criada para
                cultivar lavanda, ervas aromáticas e histórias ligadas à terra.
              </p>

              <Link to="/quintas/ervas-do-sol">Ver Ervas do Sol →</Link>
            </div>
          </div>
        </section>

        <section className="related-products">
          <h2>Outros produtos desta quinta</h2>

          <div className="related-products-grid">
            {relatedProducts.map((product) => (
              <div className="related-product-card" key={product.name}>
                <img src={product.image} alt={product.name} />

                <div>
                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <Link to={product.link}>Ver produto →</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="preorder-note">
          <div>
            <strong>
              🪻 Pré-reserve agora e garanta o seu chá quando estiver pronto.
            </strong>

            <p>
              Enviaremos uma mensagem quando a lavanda terminar o processo de
              secagem.
            </p>
          </div>

          <div>
            <span>📅</span>
            <p>Disponível a partir de 24 de junho</p>
          </div>

          <div>
            <span>🌿</span>
            <p>Produzido em pequena escala em Leiria</p>
          </div>
        </section>
      </main>
    </div>
  );
}