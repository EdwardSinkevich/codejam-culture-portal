import React from 'react';
import { graphql } from 'gatsby';
import { withI18next } from 'gatsby-plugin-i18next';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Main from '../components/main/main';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Main data={data} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

IndexPage.defaultProps = {
  data: {},
};

export default withI18next()(IndexPage);

export const query = graphql`
    query ($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng } }) {
      ...TranslationFragment
    }
     allJavascriptFrontmatter(filter: { frontmatter: { lang: { eq: $lng } } }) {
      edges {
        node {
          frontmatter {
            path     
            name
            date
            vita
            img
          }
        }
      }
    }
   }
`;
