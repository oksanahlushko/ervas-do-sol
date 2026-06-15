import "../App.css";
import { Link } from "react-router-dom";

export default function FarmPage() {
  return (
    <div className="farm-page">
      <section className="farm-hero">
        <div className="farm-overlay">
          <Link to="/" className="back-link">
            ← Voltar às quintas
          </Link>

          <h1>Ervas do Sol</h1>

          <p className="farm-location">📍 Leiria, Portugal</p>

          <p className="farm-description">
            Uma pequena quinta de lavanda criada com amor, respeito pela
            natureza e tempo para as coisas verdadeiras.
          </p>

          <div className="farm-badges">
            <span>🌿 Cultivo natural</span>
            <span>🐝 Amigo das abelhas</span>
            <span>♡ Pequena quinta familiar</span>
          </div>
        </div>
      </section>

      <section className="farm-about">
        <div>
          <p className="eyebrow">Quem somos</p>

          <h2>A nossa história</h2>

          <p>
            Sou ucraniana e vivo em Portugal. Durante muitos anos, a lavanda
            foi apenas uma imagem distante: campos roxos algures na Provença,
            vistos a partir de um apartamento no quinto andar, em Kyiv.
          </p>

          <p>
            Hoje estou a criar o meu pequeno jardim de lavanda em Portugal.
            O Ervas do Sol nasceu desse sonho antigo e da vontade de voltar
            ao real: à terra, ao cheiro das plantas, às estações e às pequenas
            histórias que crescem devagar.
          </p>

          <p>
            Antes de ser uma plataforma, o Ervas do Sol é uma procura: conhecer
            quem cultiva, acompanhar a vida das quintas e aproximar as pessoas
            da origem dos seus alimentos.
          </p>
        </div>

        <img src="/photo5.jpg" alt="Lavanda com abelha" />
      </section>

      <section className="farm-products">
        <p className="eyebrow">Produtos</p>

        <h2>O que estará disponível para si</h2>

        <p className="products-subtitle">
          Escolha uma data e descubra o que pode encomendar agora ou pré-reservar.
        </p>

        <div className="availability-toolbar">
          <button className="date-selector" type="button">
            <span>📅</span>
            <span>1 de julho</span>
            <span>⌄</span>
          </button>

          <div className="availability-filters">
            <span className="filter-chip available-now">
              ● Disponível agora
            </span>

            <span className="filter-chip drying">
              ● Em secagem
            </span>

            <span className="filter-chip preorder">
              ● Pré-reserva
            </span>
          </div>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <img src="/photo4.jpg" alt="Chá de Lavanda" />

            <div className="product-info">
              <h3>🪻 Chá de Lavanda</h3>

              <p>
                Flores secas de lavanda para infusões aromáticas, delicadas
                e relaxantes.
              </p>

              <span className="product-status drying-status">
                ● Em secagem
              </span>

              <p className="available-date orange-date">
                📅 Disponível a partir de 24 de junho
              </p>

              <button className="product-button preorder-button" type="button">
                Pré-reservar
              </button>
            </div>
          </div>

          <div className="product-card">
            <img src="/quintabee.jpg" alt="Ramos de Lavanda" />

            <div className="product-info">
              <h3>💐 Ramos de Lavanda</h3>

              <p>
                Ramos secos para decorar, perfumar a casa e guardar um pouco
                do verão.
              </p>

              <span className="product-status available-status">
                ● Disponível agora
              </span>

              <p className="available-date green-date">
                📅 Pode encomendar hoje
              </p>

              <button className="product-button order-button" type="button">
                Encomendar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="farm-gallery">
        <p className="eyebrow">Fotos</p>

        <h2>Momentos da nossa quinta</h2>

        <div className="gallery-grid">
          <img src="/beemain.jpg" alt="Lavanda" />
          <img src="/photo4.jpg" alt="Lavanda" />
          <img src="/photo3.jpg" alt="Lavanda" />
          <img src="/quintabee.jpg" alt="Lavanda" />
        </div>
      </section>
    </div>
  );
}