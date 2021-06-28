import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const animateFooterOnScroll = (revealRef, updateLoco, mainItem) => {
  const tl = gsap.from(".built-with-text", {
    opacity: 0,
    ease: Power3.easeInOut,
    duration: 0.4,
  });

  ScrollTrigger.create({
    trigger: revealRef.current,
    start: "top-=400 center",

    scroller: mainItem,
    animation: tl,
    toggleActions: "play none none none",
  });

  // update loco
  updateLoco();
};

export default animateFooterOnScroll;
