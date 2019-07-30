import PropTypes from 'prop-types';
import React from 'react';
import Navigation from './navigation';

const Header = ({ siteTitle, lng }) => (
  <Navigation siteTitle={siteTitle} lng={lng} />
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
