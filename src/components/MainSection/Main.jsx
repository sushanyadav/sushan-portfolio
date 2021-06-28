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
        ".dot-text",
        {
          yPercent: 100,
          opacity: 0,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.6
      )
      .from(
        ".location-text",
        {
          yPercent: 100,
          opacity: 0,
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
          opacity: 0,
          ease: Power3.easeInOut,
          duration: 1,
        },
        1
      );
  }, []);

  //

  return (
    <div className="border-b border-gray-100">
      {/* spacer for navbar  start*/}
      <div className="h-14.5 sm:h-22" />
      {/* spacer for navbar end*/}
      <main className="py-16 md:py-45 container  text-gray-900">
        <h1 className=" font-semibold overflow-hidden text-2xl md:text-5.5xl">
          <span className="hi-text inline-block">Hi! </span>

          <span className="i-am-text inline-block ml-3">I am Sushan</span>

          <span className="text-pink-600 md:tracking-normal dot-text inline-block">
            .
          </span>

          <span className="ml-5 text-xs md:text-base self-end location-text font-medium">
            📍Nepal
          </span>
        </h1>
        <div className="overflow-hidden">
          <h2 className="mt-2 front-end-text text-base md:text-3.5xl font-normal">
            I love building interactive web experiences using technologies such
            as <span className="font-bold">React</span> &{" "}
            <span className="font-bold">NextJS</span>.
          </h2>
        </div>
        <div className="mt-6 inline-block">
          <div className="bg-white flex items-center py-2 px-3 shadow-sm rounded-3xl secondary-text">
            <div className="w-2 h-2 bg-active rounded-full mr-2"></div>
            <p className=" font-medium text-sm md:text-base">
              Currently available for new opportunities
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
