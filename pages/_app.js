import "../styles/globals.css";
import * as Layout from "../lib/components/layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout.Header />
      <Layout.Nav />
      <div id="page">
        <Component {...pageProps} />
      </div>
      <Layout.Footer />
    </>
  );
}

export default MyApp;
