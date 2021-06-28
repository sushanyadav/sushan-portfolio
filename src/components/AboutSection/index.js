import { MailIcon, TwitterIcon } from "components/Icons";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-10 text-md md:text-2.5xl border border-b md:border-none border-gray-100 text-gray-600 md:py-20 container"
    >
      <h1 className="text-gray-900 text-1.3xl md:text-4.5xl font-semibold ">
        A little about me
      </h1>
      <p className="mt-8">
        Around 2019, I discovered JavaScript and started experimenting with
        React. As I learnt more, I fell in love with all the possibilities of
        things you could create with it. Eventually, that led me to drop out and
        focus all my time mastering this beautiful library.
        <span className="inline-block mt-8">
          Fast forward to 2021, I have finally polished and developed expertise
          in a lot of frontend skills and I am ready to take on new challenges
          and opportunities. I enjoy turning designs into beautiful, interactive
          and accessible experiences with attention to the smallest of details.
          I strongly believe in writing clean and scalable code. I am constantly
          learning and keeping myself up-to-date with emerging technologies and
          love challenging myself to learn something new every now and then.
        </span>{" "}
      </p>
      <div id="contact" className="mt-8">
        <p className="font-semibold inline-block mb-8">
          So, if you like my work and feel like you have a role that could fit,
          feel free to reach out.
        </p>
        <div className="flex gap-10">
          <MailIcon />
          <TwitterIcon />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
