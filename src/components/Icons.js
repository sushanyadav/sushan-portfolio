import PropTypes from "prop-types";

export const DownloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="md:w-6 md:h-6 sm:w-4 sm:h-4 w-3 h-3"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
      ></path>
    </svg>
  );
};

export const GoToIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="md:w-6 md:h-6 w-4 h-4 group-hover:rotate-45 transition-transform"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F0F0F0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 17L17 7M7 7h10v10"
      ></path>
    </svg>
  );
};

export const Cursor = ({ isTouchDevice }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      style={{ display: isTouchDevice ? "none" : "block" }}
      viewBox="0 0 31 31"
    >
      <path
        fill="url(#paint0_linear)"
        d="M28.392 17.95c1.968-.355 2.253-3.06.402-3.819L11.682 7.12c-1.417-.58-2.934.582-2.742 2.102l2.319 18.347c.25 1.984 2.936 2.412 3.792.604l3.602-7.611a2 2 0 011.452-1.113l8.287-1.498z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="8.51"
          x2="23.628"
          y1="5.819"
          y2="25.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8730"></stop>
          <stop offset="1" stopColor="#FFB178"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

Cursor.defaultProps = {
  isTouchDevice: false,
};

Cursor.propTypes = {
  isTouchDevice: PropTypes.bool,
};
