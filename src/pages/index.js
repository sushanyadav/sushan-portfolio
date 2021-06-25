import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import { setLocoMotiveWithScrollTrigger } from "utils/animations";
import animateProjectsOnScroll from "animations/projects";
import animateFooterOnScroll from "animations/footer";

import Layout from "components/Layout";
import Main from "components/MainSection/Main";
import ProjectsSection from "components/ProjectsSection";

gsap.registerPlugin(ScrollTrigger);

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

  const animateRevealRefs = (updateLoco) => {
    animateProjectsOnScroll(revealRef, updateLoco, mainItem.current);
    animateFooterOnScroll(footerRef, updateLoco, mainItem.current);
  };

  useEffect(() => {
    import("locomotive-scroll").then(({ default: Default }) => {
      const updateLoco = setLocoMotiveWithScrollTrigger(
        Default,
        mainItem.current
      );

      // animations //*make sure u pass updateLoco function and call it at the end
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
