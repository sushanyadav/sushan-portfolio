import { AndSymbol, TwitterIcon, MailIcon } from "components/Icons";

const Footer = () => {
  return (
    <footer className="container mt-20">
      <h2 className="text-gray-800 text-xl sm:text-5xl  font-extrabold sm:leading-extra-loose leading-loose">
        Still scrolling? 🤔 Here’s a little more about me.
      </h2>
      <section className="mt-8 space-y-10">
        <div className="text-3.5xl">
          <h3>I am 👨‍ 💻</h3>
          <p className="font-bold" style={{ color: "#302CE8" }}>
            a self / internet taught web developer
          </p>
        </div>
        <div className="text-3.5xl">
          <h3>I absolutely love ❤️</h3>
          <p className="font-bold" style={{ color: "#302CE8" }}>
            working with APIs and React, NextJS
          </p>
        </div>
        <div className="text-3.5xl">
          <h3>along with +++</h3>
          <p className="font-bold" style={{ color: "#302CE8" }}>
            TailwindCSS, SCSS, ES6, Redux, Redux Saga, Redux Thunk, Git ...
          </p>
        </div>
        <div className="text-6.5xl">
          <AndSymbol />
        </div>
        <div className="text-3.5xl">
          <h3>also learning 🤓 </h3>
          <p className="font-bold" style={{ color: "#302CE8" }}>
            Gatsby, TypeScript, GSAP, Strapi{" "}
            <span className="text-light-green">
              and something new everyday 🌱
            </span>
          </p>
        </div>
        <AndSymbol />
        <p className="text-3.5xl font-bold" style={{ color: "#302CE8" }}>
          I am looking for my next opportunity to work with you and create some
          really cool things together.{" "}
          <span className="text-black">
            So, if you feel like you have an opportunity or work that could fit,
            feel free to reach out.
          </span>
        </p>
      </section>
      <div className="mt-10 flex space-x-12">
        <TwitterIcon />
        <MailIcon />
      </div>
      {/* spacing */}
      <div className="h-40" />
    </footer>
  );
};

export default Footer;
