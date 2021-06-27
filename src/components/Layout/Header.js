import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import PropTypes from "prop-types";

import Button from "components/Button";
import { DownloadIcon, MoonIcon } from "components/Icons";

const NavItems = () => {
  return (
    <nav className="flex-grow">
      <ul className="flex items-center justify-center space-x-4 sm:space-x-12 md:space-x-16 h-full font-medium text-gray-900 text-xs md:text-base leading-8">
        <li>
          <Link href="#projects">
            <a className="py-8">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className="py-8">About</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className="py-8">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = ({ scrollYPosition }) => {
  const header = useRef();

  useEffect(() => {
    // removes initial flash
    gsap.to(".navigation", 0, { opacity: 1 });

    gsap.from(".navigation", 0.8, {
      y: -90,
      autoAlpha: 0,
      ease: Power3.easeInOut,
    });
  }, []);

  // useEffect(() => {
  //   if (document) {
  //     const projectEl = document.getElementById("projects");
  //     const projectDistance = projectEl.getBoundingClientRect().top - 40;

  // console.log(projectDistance, "project distance");
  //   }
  // }, []);

  // useEffect(() => {
  // console.log(scrollYPosition, "scrollYPosition");
  // }, [scrollYPosition]);

  // 60px 96px
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
        <NavItems />
        <div className="flex flex-none space-x-2 md:space-x-8 items-center justify-center">
          <MoonIcon />
          <Button Icon={DownloadIcon} text="Resume" paddingClass="py-1" />
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
