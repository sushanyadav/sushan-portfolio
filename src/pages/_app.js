import Head from "next/head";
import PropTypes from "prop-types";

import Layout from "components/Layout";

import "assets/css/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="font-custom">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

MyApp.defaultProps = {};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
