import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap, Power3 } from "gsap";

import Layout from "components/Layout";
import Main from "components/MainSection/Main";
import ProjectsSection from "components/ProjectsSection";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const mainItem = useRef();
  const revealRef = useRef();

  revealRef.current = [];

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  const animateRevealRefs = (updateLoco) => {
    revealRef.current.forEach((el) => {
      const imageWrapper = el.lastChild.firstChild;
      const image = el.lastChild.lastChild.lastChild;
      const primaryTextEl = el.firstChild.firstChild.firstChild;
      const secondaryTextEl = el.firstChild.children[1].firstChild;
      const button = el.firstChild.lastChild;

      const tl = gsap
        .timeline({})
        .from(
          primaryTextEl,
          {
            yPercent: 100,
            autoAlpha: 0,
            ease: Power3.easeInOut,
            duration: 0.6,
          },
          "-=0.1"
        )
        .from(
          secondaryTextEl,
          {
            yPercent: 100,
            autoAlpha: 0,
            ease: Power3.easeInOut,
            duration: 0.9,
          },
          "-=0.4"
        )
        .from(
          button,
          {
            opacity: 0,
            ease: Power3.easeInOut,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(imageWrapper, { height: 0, duration: 0.6, delay: 0.4 }, "-=1.4")
        .from(image, { duration: 0.6, opacity: 0, scale: 1.6 }, "<");

      ScrollTrigger.create({
        trigger: el,
        start: "top-=350 center",
        end: "bottom-=100",
        scroller: mainItem.current,
        animation: tl,
        toggleActions: "play none none none",
      });

      // update loco
      updateLoco();
    });
  };

  useEffect(() => {
    import("locomotive-scroll").then(({ default: Default }) => {
      const locoScroll = new Default({
        el: mainItem.current,
        smooth: true,
        smoothMobile: false,
      });

      // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy(mainItem.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },

        // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },

        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: mainItem.current.style.transform ? "transform" : "fixed",
      });

      const updateLoco = () => {
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
      };

      // animations //*make sure u pass updateLoco function and call it at the end
      animateRevealRefs(updateLoco);
    });
  }, []);

  return (
    <div ref={mainItem}>
      <Layout>
        <Main />
        <ProjectsSection addToRefs={addToRefs} />
      </Layout>
    </div>
  );
};

export default HomePage;
