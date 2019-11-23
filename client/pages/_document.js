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
              __html: 'history.scrollRestoration = "manual";'
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-151371096-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-151371096-1');
          function gaOptout(){
          var gaProperty = 'UA-151371096-1';
          var disableStr = 'ga-disable-' + gaProperty;
          document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
          window[disableStr] = true;
          location.reload(true);}`
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
