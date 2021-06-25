import PropTypes from "prop-types";

import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

const Layout = ({ children, footerRef }) => {
  return (
    <>
      <Header />
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
};

export default Layout;
