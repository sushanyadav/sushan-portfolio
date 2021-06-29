import { useEffect } from "react";
import { gsap, Power3 } from "gsap";

const Main = () => {
  useEffect(() => {
    gsap
      .timeline()
      .from(
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
      )
      .from(
        ".main-section",
        {
          opacity: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.3
      );
  }, []);

  return (
    <div className="main-section border-b transition-colors border-gray-100 dark:border-gray-800">
      {/* spacer for navbar  start*/}
      <div className="h-14.5 sm:h-22" />
      {/* spacer for navbar end*/}
      <main className="py-16 md:py-28 lg:py-32 xl:py-45 container transition-colors text-gray-900 dark:text-gray-50">
        <h1 className=" font-semibold overflow-hidden text-2xl md:text-4xl lg:text-5xl xl:text-5.5xl">
          <span className="hi-text inline-block">Hi! </span>

          <span className="i-am-text inline-block ml-2 md:ml-3">
            I am Sushan
          </span>

          <span className="text-pink-600 dark:text-pink-500 md:tracking-normal dot-text inline-block">
            .
          </span>

          <address className="inline-block not-italic ml-3 md:ml-5 dark:text-gray-500 text-xs md:text-base self-end location-text font-medium">
            📍Nepal
          </address>
        </h1>
        <div className="overflow-hidden">
          <h2 className="mt-2 front-end-text text-base md:text-xl lg:text-2xl xl:text-3.5xl dark:text-gray-500 text-gray-600 font-normal">
            I love building interactive web experiences using technologies such
            as{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              React
            </span>{" "}
            &{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              NextJS
            </span>
            .
          </h2>
        </div>
        <div className="mt-6 md:mt-2 lg:mt-4 xl:mt-6 inline-block">
          <div className="bg-white border border-gray-100 dark:border-gray-700 transition-colors dark:bg-gray-800 flex items-center py-2 px-3 shadow-sm rounded-3xl secondary-text">
            <div className="w-2 h-2 bg-active rounded-full mr-2"></div>
            <p className="dark:text-gray-400  font-medium text-sm md:text-base">
              Currently available for new opportunities
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
