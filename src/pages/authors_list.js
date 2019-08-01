import React from 'react';
import { withI18next } from 'gatsby-plugin-i18next';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './authors_list.css';

const authorsList = ({ data }) => {
  const authorsListData = data.allJavascriptFrontmatter.edges;

  return (
    <Layout>
      <SEO title="Authors list" />
      <main className="searchWrapper">
        <input
          type="search"
          placeholder="Search directors"
        />
        <List>
          {
            authorsListData.map(authorInfo => (
              <Link key={authorInfo.node.id} to={authorInfo.node.frontmatter.path}>
                <li>{ authorInfo.node.frontmatter.name }</li>
              </Link>
            ))
          }
        </List>
      </main>
    </Layout>
  );
};

authorsList.propTypes = {
  data: PropTypes.object,
};

authorsList.defaultProps = {
  data: {},
};

export default withI18next()(authorsList);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng } }) {
      ...TranslationFragment
    }
    allJavascriptFrontmatter(filter: { frontmatter: { lang: { eq: $lng } } }) {
      edges {
        node {
          id
          frontmatter {
            name
            birthPlace
            path
          }
        }
      }
    }
  }
`;
