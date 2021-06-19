import PropTypes from "prop-types";

import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};

export default Layout;
