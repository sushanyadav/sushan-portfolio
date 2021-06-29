import PropTypes from "prop-types";

import { GoToIcon } from "./Icons";

const Button = ({
  Icon,
  text,
  textColor,
  rounded,
  background,
  fontSize,
  outline,
  padding,
  hover,
  additionalClass,
}) => {
  return (
    <button
      className={`${rounded} ${outline} ${padding} ${textColor} ${background} ${fontSize} ${hover} ${additionalClass} group flex font-medium items-center justify-center focus:outline-none transition-colors`}
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
  textColor: "text-pink-600 dark:text-pink-500",
  rounded: "rounded-extra-large",
  background: "",
  fontSize: "text-sm",
  outline: "",
  additionalClass: "",
  padding: "py-2 px-4",
  hover: "hover:text-white hover:bg-pink-600 dark:hover:bg-pink-500",
};

Button.propTypes = {
  Icon: PropTypes.func,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  rounded: PropTypes.string,
  background: PropTypes.string,
  fontSize: PropTypes.string,
  outline: PropTypes.string,
  padding: PropTypes.string,
  hover: PropTypes.string,
  additionalClass: PropTypes.string,
};

export default Button;
