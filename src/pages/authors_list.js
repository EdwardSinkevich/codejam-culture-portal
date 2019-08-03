import React from 'react';
import { withI18next } from 'gatsby-plugin-i18next';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './authors_list.css';

class authorsList extends React.Component {
  constructor({ data }) {
    super({ data });
    this.data = data;
    this.state = { };
    this.state.items = this.data.allJavascriptFrontmatter.edges ? this.data.allJavascriptFrontmatter.edges : [];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (!this.data.allJavascriptFrontmatter) return;
    let list = this.data.allJavascriptFrontmatter.edges.filter((item) => {
      if (!event.target.value) {
        return true;
      }
      return item.node.frontmatter.name
        .concat(item.node.frontmatter.birthPlace)
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    if (!list.length) {
      list = null;
    }
    global.console.log('list');
    global.console.log(list);
    this.setState({ items: list });
  }

  list() {
    const authorsListData = this.state;
    if (!authorsListData.items) {
      return (
        <li>Sorry, no result</li>
      );
    }
    return (
      authorsListData.items.map(authorInfo => (
        <Link key={authorInfo.node.id} to={authorInfo.node.frontmatter.path}>
          <li>{`${authorInfo.node.frontmatter.name}, ${authorInfo.node.frontmatter.birthPlace}`}</li>
        </Link>
      ))
    );
  }

  render() {
    return (
      <Layout>
        <SEO title="Authors list" />
        <main className="searchWrapper">
          <input
            type="search"
            placeholder="Search directors"
            onChange={this.handleChange}
          />
          <List>
            {
              this.list()
            }
          </List>
        </main>
      </Layout>
    );
  }
}

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
