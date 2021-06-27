import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Cursor } from "components/Icons";
import ScrollToTopButton from "components/ScrollToTopButton";
import Layout from "components/Layout";
import Header from "components/Layout/Header";

import useMediaQuery from "hooks/useMediaQuery";

import animateFooterOnScroll from "animations/footer";
import animateHeaderOnScroll from "animations/header";

import { setLocoMotiveWithScrollTrigger } from "utils/animations";
import { scrollToFooter } from "utils/navigationScroll";

import "assets/scss/main.scss";

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(true);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const componentRef = useRef();
  const scrollItem = useRef();
  const cursorItem = useRef();
  const footerRef = useRef();

  const isSmallDevice = useMediaQuery("(max-width: 576px)"); // returns true if a user is using mobile-phone

  useEffect(() => {
    const { current: main } = scrollItem;

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

    if (document) {
      // cursor
      document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      // not showing cursor on touch devices
      if ("ontouchstart" in document.documentElement) {
        setIsTouchDevice(true);
      }

      // reset cursor on button and links
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
    import("locomotive-scroll").then(({ default: Default }) => {
      const locoScroll = new Default({
        el: scrollItem.current,
        smooth: true,
        smartphone: {
          smooth: false,
        },
        tablet: {
          smooth: false,
        },
        firefoxMultiplier: 50,
      });

      // for scroll to top component visibility state
      locoScroll.on("scroll", (obj) => {
        setScrollYPosition(obj.scroll.y);
        if (obj.scroll.y < 10) {
          setShowScrollToTopButton(false);
        } else {
          setShowScrollToTopButton(true);
        }
      });

      const scrollTo = (st, scrollDistance) => {
        st.scroll(scrollDistance);
      };

      const updateLoco = setLocoMotiveWithScrollTrigger(
        locoScroll,
        scrollItem.current
      );

      animateFooterOnScroll(
        footerRef,
        updateLoco,
        scrollItem.current,
        scrollToFooter,
        scrollTo
      );

      animateHeaderOnScroll(updateLoco, scrollItem.current, isSmallDevice);

      if (componentRef.current?.handlePageAnimations) {
        componentRef.current.handlePageAnimations(updateLoco);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.fontshare.com/css?f[]=general-sans@400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* cursor */}
      <div className="cursor" ref={cursorItem}>
        <Cursor isTouchDevice={isTouchDevice} />
      </div>
      {/* smooth scroll component */}
      <Header scrollYPosition={scrollYPosition} />
      <div
        ref={scrollItem}
        style={{ cursor: !isTouchDevice ? "none" : "auto" }}
        className="opacity-0 font-custom"
      >
        <Layout scrollYPosition={scrollYPosition} footerRef={footerRef}>
          <Component
            scrollItem={scrollItem}
            ref={componentRef}
            {...pageProps}
          />
        </Layout>
      </div>
      {/* scroll to top button */}
      <ScrollToTopButton showScrollToTopButton={showScrollToTopButton} />
    </>
  );
}

MyApp.defaultProps = {};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
