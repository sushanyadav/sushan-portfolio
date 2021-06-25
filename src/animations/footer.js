import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const animateFooterOnScroll = (
  revealRef,
  updateLoco,
  mainItem,
  scrollToNavigation,
  scrollTo
) => {
  const tl = gsap
    .timeline({})
    .from(
      ".still-scrolling-text",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.2"
    )
    .from(
      ".footer-i-am-text",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".self-taught-text",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".absolutely-text",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".along-with-text",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".tech-list",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".first-and-symbol",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".also-learning-text",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".more-tech-text",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".second-and-symbol",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".looking-for-text",
      {
        yPercent: 40,
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".twitter-icon",
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".mail-icon",
      {
        opacity: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      "-=0.6"
    );

  const st = ScrollTrigger.create({
    trigger: revealRef.current,
    start: "top-=150 center",
    scroller: mainItem,
    animation: tl,
    toggleActions: "play none none none",
  });

  scrollToNavigation(st, scrollTo);

  // update loco
  updateLoco();
};

export default animateFooterOnScroll;
