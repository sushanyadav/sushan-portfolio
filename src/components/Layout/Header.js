import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import PropTypes from "prop-types";

import Button from "components/Button";
import { DownloadIcon, MoonIcon } from "components/Icons";

const NavItems = ({ activeLink }) => {
  return (
    <nav className="flex-grow">
      <ul className="flex items-center justify-center h-full font-medium  text-xs md:text-base leading-8">
        {/* 1rem sm:3rem md:4rem */}
        <li>
          <Link href="#projects">
            <a
              className={`${
                activeLink === "Projects" ? "text-pink-600" : "text-gray-900"
              } py-8 pr-2 pl-4 sm:pr-6 sm:pl-12 md:pr-8 md:pl-16`}
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a
              className={`${
                activeLink === "About" ? "text-pink-600" : "text-gray-900"
              } py-8 px-4 sm:px-12 md:px-16`}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a
              className={`${
                activeLink === "Contact" ? "text-pink-600" : "text-gray-900"
              } py-8 pl-2 pr-4 sm:pl-6 sm:pr-12 md:pl-8 md:pr-16`}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavItems.defaultProps = {};

NavItems.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

const Header = ({ scrollYPosition }) => {
  const header = useRef();

  const [distanceFromTop, setDistanceFromTop] = useState({
    projectsDistance: null,
    contactDistance: null,
    aboutDistance: null,
  });

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // removes initial flash
    gsap.to(".navigation", 0, { opacity: 1 });

    gsap.from(".navigation", 0.8, {
      y: -90,
      autoAlpha: 0,
      ease: Power3.easeInOut,
    });
  }, []);

  useEffect(() => {
    if (document) {
      // projects
      const projectsEl = document.getElementById("projects");
      const projectsDistance = projectsEl.getBoundingClientRect().top - 40;

      // about
      const aboutEl = document.getElementById("about");
      const aboutDistance = aboutEl.getBoundingClientRect().top - 100;

      // contact
      const contactEl = document.getElementById("contact");
      const contactDistance = contactEl.getBoundingClientRect().top - 80;

      setDistanceFromTop({ projectsDistance, aboutDistance, contactDistance });
    }
  }, []);

  useEffect(() => {
    const { projectsDistance, aboutDistance, contactDistance } =
      distanceFromTop;

    const projectPosition =
      scrollYPosition >= projectsDistance &&
      scrollYPosition < aboutDistance - 200;
    const aboutPosition =
      scrollYPosition >= aboutDistance &&
      scrollYPosition < contactDistance - 200;
    const contactPosition =
      contactDistance && scrollYPosition >= contactDistance - 100;

    if (projectPosition) {
      setActiveLink("Projects");
    } else if (aboutPosition) {
      setActiveLink("About");
    } else if (contactPosition) {
      setActiveLink("Contact");
    } else {
      setActiveLink("");
    }
  }, [scrollYPosition]);

  return (
    <section
      ref={header}
      className="opacity-0 border-b bg-white border-gray-100 z-10 h-14.5 sm:h-22 fixed top-0 left-0 w-full navigation overflow-y-hidden"
    >
      <header className="container h-full flex justify-between items-center">
        <Link href="/">
          <a>
            <div
              style={{
                background: "linear-gradient(180deg, #FFA3D0 0%, #FFE1F0 100%)",
              }}
              className="rounded-full w-6 h-6 md:h-10 md:w-10 flex-none"
            ></div>
          </a>
        </Link>
        <NavItems activeLink={activeLink} />
        <div className="flex flex-none space-x-2 md:space-x-8 items-center justify-center">
          <button className="focus:outline-none inline-block p-2">
            <MoonIcon />
          </button>
          <Button
            Icon={DownloadIcon}
            text="Resume"
            rounded="rounded-large"
            textColor="text-white"
            background="bg-black"
            fontSize="md:text-base text-xs"
            padding="sm:py-2 sm:px-5 py-1 px-3"
            hover="hover:opacity-80"
          />
        </div>
      </header>
    </section>
  );
};

Header.defaultProps = {};

Header.propTypes = {
  scrollYPosition: PropTypes.number.isRequired,
};

export default Header;
