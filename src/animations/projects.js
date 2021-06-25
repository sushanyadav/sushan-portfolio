import { gsap, Power3 } from "gsap";

export const animateProjectsOnScroll = (
  revealRef,
  updateLoco,
  projectScrollTrigger
) => {
  revealRef.current.forEach((el, index) => {
    const imageWrapper = el.lastChild.firstChild;
    const image = el.lastChild.lastChild.lastChild;
    const primaryTextEl = el.firstChild.firstChild.firstChild;
    const secondaryTextEl = el.firstChild.children[1].firstChild;
    const button = el.firstChild.lastChild;

    projectScrollTrigger(
      imageWrapper,
      image,
      primaryTextEl,
      secondaryTextEl,
      button,
      el,
      index
    );

    // update loco
    updateLoco();
  });
};

export const projectsTimeline = (
  imageWrapper,
  image,
  primaryTextEl,
  secondaryTextEl,
  button,
  el,
  index
) => {
  const tl = gsap
    .timeline({})
    .to(el, {
      opacity: 1,
      ease: Power3.easeInOut,
      duration: 0.6,
      delay: index === 0 ? 0.4 : 0,
    })
    .from(
      primaryTextEl,
      {
        yPercent: 100,
        autoAlpha: 0,
        ease: Power3.easeInOut,
        duration: 0.6,
      },
      "-=0.4"
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

  return tl;
};
