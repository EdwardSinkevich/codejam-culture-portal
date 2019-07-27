import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '../navigation/navigation';

const Header = ({ siteTitle }) => (
  <Navigation siteTitle={siteTitle} />
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
