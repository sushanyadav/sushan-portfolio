import { useRef, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";

import { animateProjectsOnScroll } from "scrollTriggerAnimations/projects";
import animateAboutMeOnScroll from "scrollTriggerAnimations/about";
import animateSkillSetOnScroll from "scrollTriggerAnimations/skillset";

import Main from "components/MainSection/Main";
import ProjectsSection from "components/ProjectsSection";
import AboutSection from "components/AboutSection";
import SkillsetSection from "components/SkillsetSection";

const HomePage = forwardRef((props, ref) => {
  const projectsRef = useRef();
  const aboutRef = useRef();
  const skillsetRef = useRef();

  const { scrollItem } = props;

  projectsRef.current = [];

  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useImperativeHandle(ref, () => ({
    handlePageAnimations() {
      animateProjectsOnScroll(projectsRef, scrollItem.current);
      animateAboutMeOnScroll(aboutRef, scrollItem.current);
      animateSkillSetOnScroll(skillsetRef, scrollItem.current);
    },
  }));

  return (
    <>
      <Main />
      <ProjectsSection addToRefs={addToRefs} />
      <AboutSection aboutRef={aboutRef} />
      <SkillsetSection skillsetRef={skillsetRef} />
    </>
  );
});

HomePage.defaultProps = {};

HomePage.displayName = "HomePage";

HomePage.propTypes = {
  scrollItem: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default HomePage;
