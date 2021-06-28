import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ScrollToTopButton = ({ showScrollToTopButton }) => {
  const [isLoaded, seIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      seIsLoaded(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`${
        isLoaded && showScrollToTopButton
          ? "opacity-1"
          : "opacity-0 pointer-events-none"
      }  fixed z-50 bottom-14 xl:bottom-8 right-4 xl:right-32 duration-500 transition-opacity`}
    >
      <button className="bg-gray-100 focus:outline-none opacity-70 shadow-md hover:bg-gray-200 focus:bg-gray-200 transition rounded-full  cursor-pointer h-8 w-8 flex items-center justify-center">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg> */}
      </button>
    </div>
  );
};

ScrollToTopButton.defaultProps = {};

ScrollToTopButton.propTypes = {
  showScrollToTopButton: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;
