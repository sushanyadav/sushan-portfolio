export const scrollToProjects = (st, scrollTo) => {
  // projects
  const projectsEl = document.getElementById("projects");
  const projectsDistance = projectsEl.getBoundingClientRect().top - 40;

  // contact
  const contactEl = document.getElementById("contact");
  const contactDistance = contactEl.getBoundingClientRect().top - 80;

  // about
  const aboutEl = document.getElementById("about");
  const aboutDistance = aboutEl.getBoundingClientRect().top - 40;

  const projectNav = document.querySelectorAll("nav ul li")[0];
  const aboutNav = document.querySelectorAll("nav ul li")[1];
  const contactNav = document.querySelectorAll("nav ul li")[2];

  // project nav item
  projectNav.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, projectsDistance);
  });
  // project nav item
  aboutNav.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, aboutDistance);
  });
  // project nav item
  contactNav.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(st, contactDistance);
  });
};
