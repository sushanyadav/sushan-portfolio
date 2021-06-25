import PropTypes from "prop-types";

import BeatsImage from "assets/images/projects/Beats.png";
import DesktopImage from "assets/images/projects/Desktop.png";
import GroupImage from "assets/images/projects/Group.png";
import ShellImage from "assets/images/projects/Shell.png";

import Project from "./Project";

const projects = [
  {
    id: "1",
    primaryText: "Athlane Dashboard",
    secondaryText: "Designed and defined a visual language for Athlane.",
    backgroundColorClass: "bg-violet",
    projectLink: "#",
    image: DesktopImage,
  },
  {
    id: "2",
    primaryText: "StarsAligned",
    secondaryText:
      "Marketplace for independent artists to buy professional demo tracks.",
    backgroundColorClass: "bg-moonglade-water",
    projectLink: "#",
    image: BeatsImage,
  },
  {
    id: "3",
    primaryText: "Sail Omnibox",
    secondaryText:
      "Easy to use command pallette for collaborative browser, Sail.",
    backgroundColorClass: "bg-tuscan-sun",
    projectLink: "#",
    image: GroupImage,
  },
  {
    id: "4",
    primaryText: "Nucleus",
    secondaryText: "Nucleus helps you superpower your resumes.",
    backgroundColorClass: "bg-light-green",
    projectLink: "#",
    image: ShellImage,
  },
];

const ProjectsSection = ({ addToRefs }) => {
  return (
    <div className="container space-y-10" id="projects">
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

ProjectsSection.defaultProps = {
  addToRefs: () => {},
};

ProjectsSection.propTypes = {
  addToRefs: PropTypes.func,
};

export default ProjectsSection;
