const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const authorPage = path.resolve('src/components/author.js');

  const result = await graphql(`
    {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              error
              path
            }
          }
        }
      }
    }`);
  if (result.errors) {
    throw result.errors;
  }
  result.data.allJavascriptFrontmatter.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: authorPage,
    });
  });
};
