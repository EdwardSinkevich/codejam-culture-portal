import React from 'react';
import { withI18next } from 'gatsby-plugin-i18next';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);


export default withI18next()(NotFoundPage);
