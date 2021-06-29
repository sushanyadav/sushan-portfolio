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
      <button
        id="scrollToTop"
        className="bg-gray-100 dark:bg-gray-700 focus:outline-none opacity-70 shadow-md hover:bg-gray-200 focus:bg-gray-200 transition rounded-full  cursor-pointer h-8 w-8 flex items-center justify-center"
      ></button>
    </div>
  );
};

ScrollToTopButton.defaultProps = {};

ScrollToTopButton.propTypes = {
  showScrollToTopButton: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;
