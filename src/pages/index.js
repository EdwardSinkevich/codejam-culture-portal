import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';
import SEO from '../components/seo';
import Main from '../components/main';

import Layout from '../components/layout';

const IndexPage = () => (
  <I18n>
    {t => (
      <Layout>
        {/* <SEO title="Home" /> */}
        <Main />
      </Layout>
    )}
  </I18n>
);

export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
