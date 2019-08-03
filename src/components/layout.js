import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import './layout.css';

const Layout = ({ children, data }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar siteTitle={siteData.site.siteMetadata.title} data={data} />
      <main style={{ flexGrow: '1' }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
};

Layout.defaultProps = {
  data: {},
};

export default Layout;
