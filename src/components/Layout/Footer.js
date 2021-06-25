import { AndSymbol, TwitterIcon, MailIcon } from "components/Icons";
import PropTypes from "prop-types";

const Footer = ({ footerRef }) => {
  return (
    <>
      <footer ref={footerRef} className="container mt-20">
        <h2 className="text-gray-800 flex items-center h-16 still-scrolling-text text-xl sm:text-3xl lg:text-5xl  font-extrabold sm:leading-extra-loose leading-loose">
          Still scrolling? 🤔 Here’s a little more about me.
        </h2>

        <section id="about" className="mt-7 space-y-6 md:space-y-10">
          <div className="text-lg leading-8 sm:leading-10 sm:text-2xl lg:text-3.5xl">
            <h3 className="footer-i-am-text">I am 👨‍ 💻</h3>
            <p
              className="self-taught-text font-bold"
              style={{ color: "#302CE8" }}
            >
              a self / internet taught web developer
            </p>
          </div>
          <div className="absolutely-text text-lg leading-8 sm:leading-10 sm:text-2xl lg:text-3.5xl">
            <h3>I absolutely love working with ❤️</h3>
            <p className="apis-text font-bold" style={{ color: "#302CE8" }}>
              APIs and React, NextJS
            </p>
          </div>
          <div className="along-with-text text-lg leading-8 sm:leading-10 sm:text-2xl lg:text-3.5xl">
            <h3>
              along with{" "}
              <span className="font-bold" style={{ color: "#12a77a" }}>
                +++
              </span>
            </h3>
            <p className="tech-list font-bold" style={{ color: "#302CE8" }}>
              TailwindCSS, SCSS, ES6, Redux, Redux Saga, Redux Thunk, Git ...
            </p>
          </div>
          <div className="first-and-symbol text-6.5xl">
            <AndSymbol />
          </div>
          <div className="also-learning-text text-lg leading-8 sm:leading-10 sm:text-2xl lg:text-3.5xl">
            <h3>also learning 🤓 </h3>
            <p
              className="more-tech-text font-bold"
              style={{ color: "#302CE8" }}
            >
              Gatsby, TypeScript, GSAP, Strapi{" "}
              <span style={{ color: "#12a77a" }}>
                and something new everyday 🌱
              </span>
            </p>
          </div>
          <div className="second-and-symbol text-6.5xl">
            <AndSymbol />
          </div>
          <p
            className="looking-for-text text-lg leading-8 sm:leading-10 sm:text-2xl lg:text-3.5xl font-bold"
            style={{ color: "#302CE8" }}
          >
            I am looking for my next opportunity to work with you and create
            some really cool things together.{" "}
            <span className="text-black">
              So, if you feel like you have an opportunity or work that could
              fit, feel free to reach out.
            </span>
          </p>
        </section>
        <div id="contact" className="mt-10 flex space-x-12">
          <div className="twitter-icon" data-scroll data-scroll-speed=".5">
            <TwitterIcon />
          </div>
          <div className="mail-icon" data-scroll data-scroll-speed=".5">
            <MailIcon />
          </div>
        </div>
      </footer>
      {/* spacing */}
      <div className="h-20 sm:h-40" />
    </>
  );
};

Footer.propTypes = {
  footerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Footer;
