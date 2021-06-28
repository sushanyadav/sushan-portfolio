import PropTypes from "prop-types";

const Footer = ({ footerRef }) => {
  return (
    <footer
      ref={footerRef}
      className=" border-t  text-gray-500 text-xs md:text-1.3xl border-gray-100"
    >
      <p className="container built-with-text py-6 md:py-10">
        This website was built using NextJS, TailwindCSS & GSAP.
      </p>
    </footer>
  );
};

Footer.propTypes = {
  footerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Footer;
