import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            dangerouslySetInnerHTML={{
              __html: 'history.scrollRestoration = "manual";',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
