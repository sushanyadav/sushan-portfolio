import PropTypes from "prop-types";

import { GoToIcon } from "./Icons";

const Button = ({ Icon, text }) => {
  return (
    <button className="group  flex py-md px-lg rounded-large focus:outline-none focus:bg-gray-700 hover:bg-gray-800 transition-colors bg-black text-white">
      <span className="mr-2.5 font-bold">{text}</span>
      <Icon />
    </button>
  );
};

Button.defaultProps = {
  Icon: GoToIcon,
};

Button.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
