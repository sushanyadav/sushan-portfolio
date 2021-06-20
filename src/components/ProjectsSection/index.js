import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "1",
    primaryText: "Athlane Dashboard",
    secondaryText: "Designed and defined a visual language for Athlane.",
    backgroundColorClass: "bg-violet",
    projectLink: "",
    image: "/images/Desktop.png",
  },
  {
    id: "2",
    primaryText: "StarsAligned",
    secondaryText:
      "Marketplace for independent artists to buy professional demo tracks.",
    backgroundColorClass: "bg-moonglade-water",
    projectLink: "",
    image: "/images/Beats.png",
  },
  {
    id: "3",
    primaryText: "Sail Omnibox",
    secondaryText:
      "Easy to use command pallette for collaborative browser, Sail.",
    backgroundColorClass: "bg-tuscan-sun",
    projectLink: "",
    image: "/images/Group.png",
  },
  {
    id: "4",
    primaryText: "Nucleus",
    secondaryText: "Nucleus helps you superpower your resumes.",
    backgroundColorClass: "bg-light-green",
    projectLink: "",
    image: "/images/Shell.png",
  },
];

const ProjectsSection = () => {
  const revealRef = useRef();

  revealRef.current = [];

  useEffect(() => {
    revealRef.current.forEach((el) => {
      const image = el.parentElement.lastChild;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el.parentElement,
            start: "center bottom",
            ease: "power2",
            toggleActions: "play none none none",
          },
        })
        .to(el, {
          width: "0px",
          duration: 0.6,
        })
        .from(
          image,
          {
            scale: 1.4,
            duration: 0.5,
            delay: 0.4,
            stagger: 0.2,
          },
          "-=0.9"
        );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <div className="container space-y-10">
      {projects.map(
        ({
          id,
          primaryText,
          secondaryText,
          backgroundColorClass,
          projectLink,
          image,
        }) => {
          return (
            <Project
              addToRefs={addToRefs}
              key={id}
              primaryText={primaryText}
              secondaryText={secondaryText}
              backgroundColorClass={backgroundColorClass}
              projectLink={projectLink}
              image={image}
            />
          );
        }
      )}
    </div>
  );
};

export default ProjectsSection;
