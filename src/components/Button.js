import PropTypes from "prop-types";

import { GoToIcon } from "./Icons";

const Button = ({ Icon, text, paddingClass }) => {
  const paddingClassName = paddingClass || "py-3";

  return (
    <button
      className={`${paddingClassName} group leading-5 flex items-center justify-center px-3 sm:py-3 sm:px-4 md:py-2 md:px-5 text-sm md:text-base rounded-large focus:outline-none focus:bg-gray-700 hover:bg-gray-800 transition-colors bg-black text-white sm:w-auto w-full`}
    >
      {text}
      <span className="ml-2.5">
        <Icon />
      </span>
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
