import PropTypes from "prop-types";

import { MailIcon, TwitterIcon } from "components/Icons";

const AboutSection = ({ aboutRef }) => {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-10 lg:py-16 xl:py-20 text-md lg:text-xl xl:text-2.5xl border border-b md:border-none border-gray-100 text-gray-600  container"
    >
      <div className="overflow-hidden">
        <h1 className="text-gray-900 text-1.3xl lg:text-3xl xl:text-4.5xl font-semibold ">
          A little about me
        </h1>
      </div>
      <div className="mt-8">
        <div className="overflow-hidden">
          <p>
            Around 2019, I discovered JavaScript and started experimenting with
            React. As I learnt more, I fell in love with all the possibilities
            of things you could create with it. Eventually, that led me to drop
            out and focus all my time mastering this beautiful library.
          </p>
        </div>
        <div className="mt-8 overflow-hidden">
          <p>
            Fast forward to 2021, I have finally polished and developed
            expertise in a lot of frontend skills and I am ready to take on new
            challenges and opportunities. I enjoy turning designs into
            beautiful, interactive and accessible experiences with attention to
            the smallest of details. I strongly believe in writing clean and
            scalable code. I am constantly learning and keeping myself
            up-to-date with emerging technologies and love challenging myself to
            learn something new every now and then.
          </p>
        </div>
      </div>

      <div id="contact" className="mt-8">
        <p className="font-semibold inline-block mb-8">
          So, if you like my work and feel like you have a role that could fit,
          feel free to reach out.
        </p>
        <div className="flex gap-10">
          <div>
            <MailIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default AboutSection;
