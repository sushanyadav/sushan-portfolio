import { useRef, forwardRef, useImperativeHandle } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PropTypes from "prop-types";

import { scrollToProjects } from "utils/navigationScroll";
import { animateProjectsOnScroll, projectsTimeline } from "animations/projects";

import Main from "components/MainSection/Main";
import ProjectsSection from "components/ProjectsSection";

const HomePage = forwardRef((props, ref) => {
  const revealRef = useRef();

  const { scrollItem } = props;

  revealRef.current = [];

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  const scrollTo = (st, scrollDistance) => {
    st.scroll(scrollDistance);
  };

  const projectScrollTrigger = (
    imageWrapper,
    image,
    primaryTextEl,
    secondaryTextEl,
    button,
    el,
    index
  ) => {
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top-=350 center",
      scroller: scrollItem.current,
      animation: projectsTimeline(
        imageWrapper,
        image,
        primaryTextEl,
        secondaryTextEl,
        button,
        el,
        index
      ),
      toggleActions: "play none none none",
    });

    if (index === 0) scrollToProjects(st, scrollTo);

    return st;
  };

  useImperativeHandle(ref, () => ({
    handlePageAnimations(updateLoco) {
      animateProjectsOnScroll(revealRef, updateLoco, projectScrollTrigger);
    },
  }));

  return (
    <>
      <Main />
      <ProjectsSection addToRefs={addToRefs} />
    </>
  );
});

HomePage.defaultProps = {};

HomePage.propTypes = {
  scrollItem: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default HomePage;
