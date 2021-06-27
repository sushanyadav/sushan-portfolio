import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import PropTypes from "prop-types";

import Button from "components/Button";
import { DownloadIcon } from "components/Icons";

const NavItems = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-4 sm:space-x-12 md:space-x-xl h-full font-medium text-gray-900 text-xs sm:text-base md:text-xl leading-8">
        <li className="font-bold">
          <Link href="/">
            <a className="py-8">Home</a>
          </Link>
        </li>
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
      className="bg-gray-50 opacity-0 z-10 shadow-sm fixed top-0 left-0 w-full navigation overflow-y-hidden"
    >
      <header className="container h-full flex justify-between">
        <NavItems />
        <div className="flex  flex-col items-center justify-center">
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
