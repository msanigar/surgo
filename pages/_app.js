import Head from "next/head";
import "../styles/Main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: 'history.scrollRestoration = "manual";',
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
        <script
          defer
          data-domain="eloquent-brattain-42e403.netlify.app"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
