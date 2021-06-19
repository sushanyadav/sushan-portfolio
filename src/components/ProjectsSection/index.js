import Project from "./Project";

const ProjectsSection = () => {
  const projects = [
    {
      id: "1",
      primaryText: "Athlane Dashboard",
      secondaryText: "Designed and defined a visual language for Athlane.",
      backgroundColorClass: "bg-violet",
      projectLink: "",
      image: "https://picsum.photos/1200/1300",
    },
    {
      id: "2",
      primaryText: "StarsAligned",
      secondaryText:
        "Marketplace for independent artists to buy professional demo tracks.",
      backgroundColorClass: "bg-moonglade-water",
      projectLink: "",
      image: "https://picsum.photos/1260/1350",
    },
    {
      id: "3",
      primaryText: "Sail Omnibox",
      secondaryText:
        "Easy to use command pallette for collaborative browser, Sail.",
      backgroundColorClass: "bg-tuscan-sun",
      projectLink: "",
      image: "https://picsum.photos/1200/1400",
    },
    {
      id: "4",
      primaryText: "Nucleus",
      secondaryText: "Nucleus helps you superpower your resumes.",
      backgroundColorClass: "bg-light-green",
      projectLink: "",
      image: "https://picsum.photos/1250/1600",
    },
  ];

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
