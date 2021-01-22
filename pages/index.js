function App() {
    return(
        <main>
            <header>
                <div className="options-container">
                  <img src="/lupa.png" width="30px" height="30px" alt="Buscar"/>
                </div>
                <div className="logo-container">
                  <img src="/logo.gif" width="128px" height="40px" alt="Sallve"/>
                </div>
                <div className="options-container options-account">
                  <img className="account-icon" src="/minhaconta.png" width="30px" height="30px" alt="Minha conta"/>
                  <img src="/sacola.png" width="30px" height="30px" alt="Sacola de compra"/>
                </div>
            </header>
            <section className="title-section">
                <h1 className="main-title">loja</h1>
            </section>
  
            <style jsx>
                {
                    `
                    header{
                        padding: 20px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        position: sticky;
                        top: 0;
                        background-color: #FFFFFF;
                    }
  
                    .logo-container{
                        display: flex;
                        flex: auto;
                        aligh-items: center;
                        justify-content: center;
                    }
  
                    .options-container{
                        flex: 0.3;
                        display: flex;
                        align-items: center;
                    }
  
                    .options-account{
                        justify-content: flex-end;
                    }
  
                    .account-icon{
                        margin-right: 30px;
                    }
  
                    .title-section{
                        background-color: #8a5eff;
                        padding: 20px 10px;
                    }
                    
                    .main-title{
                        text-align: center;
                        color: #FFFFFF;
                        margin: 10px 0;
                        font-size: 40px;
                        font-weight: 800;
                    }
                    `
                }
            </style>
        </main>
    );
  
  }
  
  export default App;
