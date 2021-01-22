function App() {
  return(
      <main>
          <header>
              <div>
                <img src="/lupa.png" width="30px" height="30px" alt="Buscar"/>
              </div>
              <div>
                <img src="/logo.gif" width="128px" height="40px" alt="Sallve"/>
              </div>
              <div>
                <img className="account-icon" src="/minhaconta.png" width="30px" height="30px" alt="Minha conta"/>
                <img src="/sacola.png" width="30px" height="30px" alt="Sacola de compra"/>
              </div>
          </header>

          <style jsx>
              {
                  `
                  header{
                      padding: 20px;
                      display: flex;
                      justify-content: space-between;
                  }

                  .account-icon{
                      margin-right: 30px;
                  }
                  `
              }
          </style>
      </main>
  );

}

export default App;
