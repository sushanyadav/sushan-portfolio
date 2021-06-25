import { gsap } from "gsap";

export const scrollToFooter = (st, scrollTo) => {
  // navigation Scroll
  gsap.utils.toArray("nav a").forEach(function (a) {
    a.addEventListener("click", function (e) {
      // about
      const contactEl = document.getElementById("contact");
      const contactDistance = contactEl.getBoundingClientRect().top - 40;

      // contact
      const aboutEl = document.getElementById("about");
      const aboutDistance = aboutEl.getBoundingClientRect().top - 40;

      e.preventDefault();

      switch (e.target.innerText) {
        case "About":
          scrollTo(st, aboutDistance);
          break;
        case "Contact":
          scrollTo(st, contactDistance);
          break;

        default:
          break;
      }
    });
  });
};

export const scrollToProjects = (st, scrollTo) => {
  // projects
  const projectsEl = document.getElementById("projects");
  const projectsDistance = projectsEl.getBoundingClientRect().top - 40;

  const projectNav = document.querySelectorAll("nav ul li")[1];

  // project nav item
  projectNav.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, projectsDistance);
  });
};
