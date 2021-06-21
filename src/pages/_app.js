import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import PropTypes from "prop-types";

import "assets/css/globals.css";
import "assets/css/locomotive-scroll.css";
import "assets/css/cursor.css";

function MyApp({ Component, pageProps }) {
  const mainItem = useRef();
  const cursorItem = useRef();
  const followerItem = useRef();

  useEffect(() => {
    const { current: main } = mainItem;

    // removes initial flash
    gsap.to(main, 0.2, { opacity: 1 });
  }, []);

  useEffect(() => {
    const { current: cursor } = cursorItem;
    const { current: follower } = followerItem;

    let posX = 0;
    let posY = 0;

    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        });

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
    const { current: follower } = followerItem;

    cursor.classList.add("active");
    follower.classList.add("active");
  };

  const onLeave = () => {
    const { current: cursor } = cursorItem;
    const { current: follower } = followerItem;

    cursor.classList.remove("active");
    follower.classList.remove("active");
  };

  useEffect(() => {
    if (document) {
      const aTags = document.querySelectorAll("a");
      const buttonTags = document.querySelectorAll("button");

      aTags.forEach((a) => {
        a.addEventListener("mouseover", onEnter);
        a.addEventListener("mouseleave", onLeave);
      });

      buttonTags.forEach((button) => {
        button.addEventListener("mouseover", onEnter);
        button.addEventListener("mouseleave", onLeave);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="cursor" ref={cursorItem}></div>
      <div className="cursor-follower" ref={followerItem}></div>
      <div
        ref={mainItem}
        style={{ cursor: "none" }}
        className="opacity-0 font-custom"
      >
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
