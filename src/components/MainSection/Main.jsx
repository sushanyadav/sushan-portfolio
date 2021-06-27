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

  //

  return (
    <>
      {/* spacer for navbar */}
      <div className="h-14.5 sm:h-24" />
      <main className="mt-8 md:mt-lg md:mb-lg mb-10 container text-gray-900">
        <h1 className="font-bold overflow-hidden text-4.5xl md:text-6.5xl">
          <div className="overflow-hidden ">
            <span className="hi-text inline-block">Hi!</span>
          </div>

          <span className="i-am-text inline-block">I&apos;m </span>
          <span
            className="tracking-wider md:tracking-normal sushan-text inline-block text-black ml-3 md:ml-4"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "white",
            }}
          >
            Sushan.
          </span>
        </h1>
        <div className="overflow-hidden">
          <h2
            style={{ color: "#8240ED" }}
            className="mt-3 front-end-text text-2xl md:3.5xl font-bold"
          >
            Frontend Developer based in Nepal 🇳🇵
          </h2>
        </div>
        <div className=" overflow-hidden">
          <p className="md:mt-8 mt-6 secondary-text text-xl leading-8 md:text-2xl">
            Currently, looking for the next opportunity to create beautiful user
            interfaces.
          </p>
        </div>
      </main>
    </>
  );
};

export default Main;
