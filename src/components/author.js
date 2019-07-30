// import React from 'react';
// import { withI18next } from 'gatsby-plugin-i18next';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';
// import Layout from './layout';
// import SEO from './seo';

// const authPage = ({ data }) => {
//   const authorsData = data.javascriptFrontmatter.frontmatter;
//   const authorImage = require(`../images/directors/${authorsData.img}`);

//   const authorWorkImages = authorsData.work.map(work => require(`../images/directors/${work.img}`));

//   return (
//     <Layout>
//       <SEO title="Page two" />
//       <main>
//         <h1>{authorsData.name}</h1>
//         <img src={authorImage} alt="Author" />
//         <img src={authorWorkImages[0]} alt="Work" />
//       </main>
//     </Layout>
//   );
// };

// authPage.propTypes = {
//   data: PropTypes.object,
// };

// authPage.defaultProps = {
//   data: {},
// };

// export default withI18next()(authPage);

// export const query = graphql`
//   query($lng: String!, $originalPath: String!) {
//     locales: allLocale(filter: { lng: { eq: $lng } }) {
//       ...TranslationFragment
//     }
//     javascriptFrontmatter(
//       frontmatter: { path: { eq: $originalPath }, lang: { eq: $lng } }
//     ) {
//       frontmatter {
//         name
//         date
//         img
//         vita
//         videoId
//         birthPlace
//         timelineData {
//           date
//           text
//         }
//         work {
//           title
//           date
//           img
//         }
//       }
//     }
//   }
// `;
