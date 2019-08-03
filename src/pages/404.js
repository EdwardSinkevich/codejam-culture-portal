import React from 'react';
import { withI18next } from 'gatsby-plugin-i18next';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ data }) => (
  // <Layout data={data}>
  <div>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
  // </Layout>
);

NotFoundPage.propTypes = {
  data: PropTypes.object,
};

NotFoundPage.defaultProps = {
  data: {},
};

export default withI18next()(NotFoundPage);
