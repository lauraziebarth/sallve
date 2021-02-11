function App() {
  return (
    <main>
      <header>
        <div className="options-container">
          <img src="/lupa.png" width="30px" height="30px" alt="Buscar" />
        </div>
        <div className="logo-container">
          <img src="/logo.gif" width="128px" height="40px" alt="Sallve" />
        </div>
        <div className="options-container options-account">
          <img
            className="account-icon"
            src="/minhaconta.png"
            width="30px"
            height="30px"
            alt="Minha conta"
          />
          <img
            src="/sacola.png"
            width="30px"
            height="30px"
            alt="Sacola de compra"
          />
        </div>
      </header>
      <section className="title-section">
        <h1 className="main-title">loja</h1>
      </section>
      <section className="products-section">
        <div className="products-grid">
          <div>
            <img className="products-photo" src="/kit-mp-mr-necessaire-1.jpg" />
            <div className="products-info">
              <h2 className="product-name">kit máscaras</h2>
              <p className="product-description">
                desincha, reequilibra e hidrata
              </p>
              <div className="normal-price">
                <h2>R$ 119,80 </h2>
                <span>ou 4x R$ 29,​95</span>
              </div>
              <div class="product-card-btns">
                <a
                  href="/collections/loja/products/mascara-antirressaca"
                  className="product-item__btn"
                >
                  quero conhecer
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              className="products-photo"
              src="/sallve-mascara-purificante-1.jpg"
            />
            <div className="products-info">
              <h2 className="product-name">máscara purificante</h2>
              <p className="product-description">
                limpa profundamente e reequilibra
              </p>
              <div className="normal-price">
                <h2>R$ 59,90 </h2>
                <span>ou 2x R$ 29,​95</span>
              </div>
              <div class="product-card-btns">
                <a
                  href="/collections/loja/products/mascara-antirressaca"
                  className="product-item__btn"
                >
                  quero conhecer
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              className="products-photo"
              src="/sallve-mascara-antirressaca-1.jpg"
            />
            <div className="products-info">
              <h2 className="product-name">máscara antirressaca</h2>
              <p className="product-description">desincha, ilumina e hidrata</p>
              <div className="normal-price">
                <h2>R$ 59,90 </h2>
                <span>ou 2x R$ 29,​95</span>
              </div>
              <div class="product-card-btns">
                <a
                  href="/collections/loja/products/mascara-antirressaca"
                  className="product-item__btn"
                >
                  quero conhecer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          header {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            background-color: #ffffff;
          }

          .logo-container {
            display: flex;
            flex: auto;
            aligh-items: center;
            justify-content: center;
          }

          .options-container {
            flex: 0.3;
            display: flex;
            align-items: center;
          }

          .options-account {
            justify-content: flex-end;
          }

          .account-icon {
            margin-right: 30px;
          }

          .title-section {
            background-color: #8a5eff;
            padding: 20px 10px;
          }

          .main-title {
            text-align: center;
            color: #ffffff;
            margin: 10px 0;
            font-size: 40px;
            font-weight: 800;
          }

          .products-section {
            width: 1020px;
            margin: 0 auto;
            padding: 54px 0;
            display: flex;
            justify-content: center;
          }

          .products-grid {
            display: inline-grid;
            grid-template-columns: 1fr 1fr 1fr;

            grid-template-areas: "main main main";
          }

          .products-grid > div {
            padding: 0 12px;
          }

          .products-photo {
            grid-area: main;
            width: 300.81px;
            height: 300.81px;
          }

          .products-info {
            margin: 5px 0 0;
            color: #333333;
          }

          .product-name {
            font-size: 20px;
            margin: 0 0 0 16px;
            font-weight: 800;
          }

          .product-description {
            font-size: 15px;
            margin: 0 0 0 16px;
            font-family: "Lato", sans-serif;
            font-weight: 500;
          }

          .normal-price {
            color: #333333;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            align-content: flex-end;
            justify-content: flex-start;
            width: 100%;
            margin: 30px 0 0 16px;
          }

          .normal-price > h2 {
            font-size: 18px;
            margin: 0;
            font-weight: 700;
          }

          .normal-price > span {
            font-size: 15px;
            font-weight: 500;
            margin-left: 3px;
          }

          .product-item__btn {
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            height: 56px;
            color: white;
            font-weight: 800;
            font-size: 18px;
            align-self: center;
            margin-top: 16px;
            margin-bottom: 0;
            background-color: #333;
            width: 70%;
            padding: 10px;
          }
        `}
      </style>
    </main>
  );
}

export default App;
