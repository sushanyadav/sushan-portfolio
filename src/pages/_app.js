import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import PropTypes from "prop-types";

import "assets/css/globals.css";
import "assets/css/locomotive-scroll.css";

function MyApp({ Component, pageProps }) {
  const mainItem = useRef();

  useEffect(() => {
    const { current: main } = mainItem;

    // removes initial flash
    gsap.to(main, 0.2, { opacity: 1 });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div ref={mainItem} className="opacity-0 font-custom">
        <Component {...pageProps} />
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
