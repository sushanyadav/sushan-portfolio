import PropTypes from "prop-types";

import Footer from "components/Layout/Footer";

const Layout = ({ children, footerRef, scrollYPosition }) => {
  return (
    <>
      {children}
      <Footer footerRef={footerRef} />
    </>
  );
};

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
  footerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  scrollYPosition: PropTypes.number.isRequired,
};

export default Layout;
