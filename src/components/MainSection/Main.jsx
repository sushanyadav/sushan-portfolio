import { useEffect } from "react";
import { gsap, Power3 } from "gsap";

const Main = () => {
  const tl = new gsap.core.Timeline();

  useEffect(() => {
    tl.from(
      ".hi-text",
      {
        yPercent: 100,
        autoAlpha: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      0.3
    )
      .from(
        ".i-am-text",
        {
          yPercent: 100,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.5
      )
      .from(
        ".sushan-text",
        {
          yPercent: 100,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.7
      )
      .from(
        ".front-end-text",
        {
          yPercent: 100,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.8
      )
      .from(
        ".secondary-text",
        {
          yPercent: 100,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        1
      );
  }, []);

  return (
    <div className="mt-8 md:mt-xl md:mb-lg mb-10  container text-gray-900">
      <h1 className="font-black  overflow-hidden text-4.5xl md:text-8.5xl">
        <div className="overflow-hidden ">
          <span className="hi-text inline-block">Hi!</span>
        </div>

        <span className="i-am-text inline-block">I&apos;m </span>
        <span
          className="italic tracking-wider md:tracking-normal sushan-text inline-block text-black ml-3 md:ml-6"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "white",
          }}
        >
          Sushan.
        </span>
      </h1>
      <div className="overflow-hidden ">
        <h2 className="mt-5 front-end-text text-2xl md:text-5xl text-gray-600 font-bold  md:leading-extra-loose">
          Frontend Developer based in Nepal.
        </h2>
      </div>
      <div className=" overflow-hidden ">
        <p className="md:mt-16 mt-6 secondary-text text-xl md:text-4.5xl">
          Currently, looking for the next opportunity to create beautiful user
          interfaces.
        </p>
      </div>
    </div>
  );
};

export default Main;
