import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { setLocoMotiveWithScrollTrigger } from "utils/animations";
import { scrollToFooter, scrollToProjects } from "utils/navigationScroll";
import { animateProjectsOnScroll, projectsTimeline } from "animations/projects";
import animateFooterOnScroll from "animations/footer";

import Layout from "components/Layout";
import Main from "components/MainSection/Main";
import ProjectsSection from "components/ProjectsSection";
import ScrollToTopButton from "components/ScrollToTopButton";

const HomePage = () => {
  const mainItem = useRef();
  const revealRef = useRef();
  const footerRef = useRef();
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(true);

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
      scroller: mainItem.current,
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

  const animateRevealRefs = (updateLoco) => {
    animateProjectsOnScroll(revealRef, updateLoco, projectScrollTrigger);
    animateFooterOnScroll(
      footerRef,
      updateLoco,
      mainItem.current,
      scrollToFooter,
      scrollTo
    );
  };

  useEffect(() => {
    import("locomotive-scroll").then(({ default: Default }) => {
      const locoScroll = new Default({
        el: mainItem.current,
        smooth: true,
        scrollFromAnywhere: true,
        smartphone: {
          smooth: false,
        },
        tablet: {
          smooth: false,
        },
      });

      locoScroll.on("scroll", (obj) => {
        if (obj.scroll.y < 10) {
          setShowScrollToTopButton(false);
        } else {
          setShowScrollToTopButton(true);
        }
      });

      const updateLoco = setLocoMotiveWithScrollTrigger(
        locoScroll,
        mainItem.current
      );

      animateRevealRefs(updateLoco);
    });
  }, []);

  return (
    <>
      <div ref={mainItem}>
        <Layout footerRef={footerRef}>
          <Main />
          <ProjectsSection addToRefs={addToRefs} />
        </Layout>
      </div>
      <ScrollToTopButton showScrollToTopButton={showScrollToTopButton} />
    </>
  );
};

export default HomePage;
