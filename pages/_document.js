import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <title>Loja - Sallve</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap" rel="stylesheet"/>

            <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                    font-family: 'Poppins', sans-serif;
                    -webkit-font-smoothing: antialiased;
	                -moz-osx-font-smoothing: grayscale;
                    margin: 0;
                }
                *, :after, :before {
                    box-sizing: border-box;
                }
              `
            }}
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument