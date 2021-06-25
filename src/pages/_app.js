import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Cursor } from "components/Icons";

import "assets/scss/main.scss";

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mainItem = useRef();
  const cursorItem = useRef();

  useEffect(() => {
    const { current: main } = mainItem;

    // removes initial flash
    gsap.to(main, 0.2, { opacity: 1 });
  }, []);

  useEffect(() => {
    const { current: cursor } = cursorItem;

    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    document &&
      document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
  }, []);

  const onEnter = () => {
    const { current: cursor } = cursorItem;

    cursor.classList.remove("cursor");
    cursor.classList.add("hidden");
  };

  const onLeave = () => {
    const { current: cursor } = cursorItem;

    cursor.classList.remove("hidden");
    cursor.classList.add("cursor");
  };

  useEffect(() => {
    if (document) {
      const aTags = document.querySelectorAll("a");
      const buttonTags = document.querySelectorAll("button");
      const linkIcons = document.querySelectorAll(".link-icon");

      aTags.forEach((a) => {
        a.addEventListener("mouseover", onEnter);
        a.addEventListener("mouseleave", onLeave);
      });

      linkIcons.forEach((linkIcon) => {
        linkIcon.addEventListener("mouseover", onEnter);
        linkIcon.addEventListener("mouseleave", onLeave);
      });

      buttonTags.forEach((button) => {
        button.addEventListener("mouseover", onEnter);
        button.addEventListener("mouseleave", onLeave);
      });
    }
  }, []);

  useEffect(() => {
    if (document) {
      if ("ontouchstart" in document.documentElement) {
        setIsTouchDevice(true);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        ref={mainItem}
        style={{ cursor: !isTouchDevice ? "none" : "auto" }}
        className="opacity-0 font-custom"
      >
        <div className="cursor" ref={cursorItem}>
          <Cursor isTouchDevice={isTouchDevice} />
        </div>
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
