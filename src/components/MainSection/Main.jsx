import { useEffect } from "react";
import { gsap, Power3 } from "gsap";

const Main = () => {
  const tl = new gsap.core.Timeline();

  useEffect(() => {
    tl.from(
      ".hi-text",
      {
        y: 90,
        autoAlpha: 0,
        ease: Power3.easeInOut,
        duration: 0.8,
      },
      0.3
    )
      .from(
        ".i-am-text",
        {
          y: 90,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.5
      )
      .from(
        ".sushan-text",
        {
          y: 90,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.7
      )
      .from(
        ".front-end-text",
        {
          y: 90,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        0.8
      )
      .from(
        ".secondary-text",
        {
          y: 90,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          duration: 0.8,
        },
        1
      );
  }, []);

  return (
    <div className="mt-xl mb-lg container text-gray-900">
      <h1 className="font-black  overflow-hidden text-8.5xl">
        <div className="overflow-hidden ">
          <span className="hi-text inline-block">Hi!</span>
        </div>

        <span className="i-am-text inline-block">I&apos;m </span>
        <span
          className="italic sushan-text inline-block text-black ml-6"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "white",
          }}
        >
          Sushan.
        </span>
      </h1>
      <div className="overflow-hidden ">
        <h2 className="mt-5 front-end-text text-5xl text-gray-600 font-bold  leading-extra-loose">
          Frontend Developer based in Nepal.
        </h2>
      </div>
      <div className=" overflow-hidden ">
        <p className="mt-16 secondary-text text-4.5xl">
          Currently, looking for the next opportunity to create beautiful user
          interfaces.
        </p>
      </div>
    </div>
  );
};

export default Main;

// import { useEffect, useRef } from "react";
// import { TweenMax, Power3 } from "gsap";

// const Main = () => {
//   const mainItem = useRef();
//   const hiTextItem = useRef();
//   const textItem = useRef();
//   const textItem2 = useRef();

//   useEffect(() => {
//     const { current: main } = mainItem;
//     const { current: hiText } = hiTextItem;
//     const { current: text } = textItem;
//     const { current: text2 } = textItem2;

//     // removes initial flash
//     TweenMax.to(main, 0, { opacity: 1 });

//     TweenMax.staggerFrom(
//       [hiText, text, text2],
//       1.5,
//       {
//         y: 90,
//         autoAlpha: 0,
//         ease: Power3.easeInOut,
//       },
//       0.3
//     );
//   }, []);

//   return (
//     <div
//       ref={mainItem}
//       className="mt-xl opacity-0 mb-lg container text-gray-900"
//     >
//       <h1 className="font-black  overflow-hidden text-8.5xl">
//         <div className="overflow-hidden ">
//           <span ref={hiTextItem} className="inline-block">
//             Hi!
//           </span>
//         </div>

//         <span ref={textItem} className="inline-block">
//           I&apos;m{" "}
//         </span>
//         <span
//           ref={textItem2}
//           className="italic inline-block text-black ml-6"
//           style={{
//             WebkitTextStroke: "1px black",
//             WebkitTextFillColor: "white",
//           }}
//         >
//           Sushan.
//         </span>
//       </h1>
//       <h2 className="mt-5 text-5xl text-gray-600 font-bold  leading-extra-loose">
//         Frontend Developer based in Nepal.
//       </h2>
//       <p className="mt-16  text-4.5xl">
//         Currently, looking for the next opportunity to create beautiful user
//         interfaces.
//       </p>
//     </div>
//   );
// };

// export default Main;
