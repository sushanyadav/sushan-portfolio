import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import { setLocoMotiveWithScrollTrigger } from "utils/animations";
import { animateProjectsOnScroll, projectsTimeline } from "animations/projects";
import animateFooterOnScroll from "animations/footer";

import Layout from "components/Layout";
import Main from "components/MainSection/Main";
import ProjectsSection from "components/ProjectsSection";

const HomePage = () => {
  const mainItem = useRef();
  const revealRef = useRef();
  const footerRef = useRef();

  revealRef.current = [];

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
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

    return st;
  };

  const scrollToNavigation = (st) => {
    // navigation Scroll
    gsap.utils.toArray("nav a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        // project
        const projectEl = document.getElementById("projects");
        const projectsDistance = projectEl.getBoundingClientRect().top - 40;

        // about
        const contactEl = document.getElementById("contact");
        const contactDistance = contactEl.getBoundingClientRect().top - 40;

        // contact
        const aboutEl = document.getElementById("about");
        const aboutDistance = aboutEl.getBoundingClientRect().top - 40;

        e.preventDefault();

        const scrollTo = (scrollDistance) => {
          st.scroll(scrollDistance);
        };

        switch (e.target.innerText) {
          case "Projects":
            scrollTo(projectsDistance);
            break;
          case "About":
            scrollTo(aboutDistance);
            break;
          case "Contact":
            scrollTo(contactDistance);
            break;

          default:
            break;
        }
      });
    });
  };

  const animateRevealRefs = (updateLoco) => {
    animateProjectsOnScroll(revealRef, updateLoco, projectScrollTrigger);
    // passing scrollToNavigation to footer //*can be any of the ScrollTrigger
    animateFooterOnScroll(
      footerRef,
      updateLoco,
      mainItem.current,
      scrollToNavigation
    );
  };

  useEffect(() => {
    import("locomotive-scroll").then(({ default: Default }) => {
      const updateLoco = setLocoMotiveWithScrollTrigger(
        Default,
        mainItem.current
      );

      animateRevealRefs(updateLoco);
    });
  }, []);

  return (
    <div ref={mainItem}>
      <Layout footerRef={footerRef}>
        <Main />
        <ProjectsSection addToRefs={addToRefs} />
      </Layout>
    </div>
  );
};

export default HomePage;
