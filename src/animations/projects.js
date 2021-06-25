import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const animateProjectsOnScroll = (revealRef, updateLoco, mainItem) => {
  revealRef.current.forEach((el) => {
    const imageWrapper = el.lastChild.firstChild;
    const image = el.lastChild.lastChild.lastChild;
    const primaryTextEl = el.firstChild.firstChild.firstChild;
    const secondaryTextEl = el.firstChild.children[1].firstChild;
    const button = el.firstChild.lastChild;

    const tl = gsap
      .timeline({})
      .to(
        el,
        {
          opacity: 1,
          ease: Power3.easeInOut,
          duration: 0.6,
        },
        "-=0.1"
      )
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
      scroller: mainItem,
      animation: tl,
      toggleActions: "play none none none",
    });

    // update loco
    updateLoco();
  });
};

export default animateProjectsOnScroll;
