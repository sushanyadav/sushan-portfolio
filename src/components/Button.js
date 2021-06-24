import PropTypes from "prop-types";

import { GoToIcon } from "./Icons";

const Button = ({ Icon, text, paddingClass }) => {
  const paddingClassName = paddingClass || "py-3";

  return (
    <button
      className={`${paddingClassName} group flex items-center justify-center sm:py-3 sm:px-4 md:py-md px-3 md:px-lg text-sm sm:text-base md:text-lg rounded-large focus:outline-none focus:bg-gray-700 hover:bg-gray-800 transition-colors bg-black text-white sm:w-auto w-full`}
    >
      <span className="mr-2.5 font-bold leading-5">{text}</span>
      <Icon />
    </button>
  );
};

Button.defaultProps = {
  Icon: GoToIcon,
  paddingClass: "",
};

Button.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  paddingClass: PropTypes.string,
};

export default Button;
