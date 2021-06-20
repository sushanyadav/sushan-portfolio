import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import PropTypes from "prop-types";

import Layout from "components/Layout";

import "assets/css/globals.css";

function MyApp({ Component, pageProps }) {
  const mainItem = useRef();

  useEffect(() => {
    const { current: main } = mainItem;

    // removes initial flash
    gsap.to(main, 0, { opacity: 1 });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div ref={mainItem} className="opacity-0 font-custom">
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
