import { gsap } from "gsap";

export const scrollToFooter = (st, scrollTo) => {
  // navigation Scroll
  gsap.utils.toArray("nav a").forEach(function (a) {
    // contact
    const contactEl = document.getElementById("contact");
    const contactDistance = contactEl.getBoundingClientRect().top - 40;

    // about
    const aboutEl = document.getElementById("about");
    const aboutDistance = aboutEl.getBoundingClientRect().top - 40;

    a.addEventListener("click", function (e) {
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

  const projectNav = document.querySelectorAll("nav ul li")[0];

  // project nav item
  projectNav.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, projectsDistance);
  });
};
