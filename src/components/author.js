import React from 'react';
import { withI18next } from 'gatsby-plugin-i18next';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from './layout';
import SEO from './seo';

import Map from './author/map';
import Video from './author/video';
import PhotoGallery from './author/photoGallery';
import VerticalTimelines from './author/timeLine';
import './author/author.css';

const authPage = ({ data }) => {
  const authorsData = data.javascriptFrontmatter.frontmatter;
  const authorImage = require(`../images/directors/${authorsData.img}`);

  return (
    <Layout>
      <SEO title="Author page" />
      <main>
        <h1 className="authorName">{authorsData.name}</h1>
        <div className="authorImage">
          <img src={authorImage} alt="Author" />
        </div>
        <h3 className="authorBirth">{authorsData.date}</h3>
        <h3 className="authorVita">{authorsData.vita}</h3>
        <h2 className="authorTitle">Временная линия</h2>
        <VerticalTimelines timelineData={authorsData.timelineData} />
        <h2 className="authorTitle">Видео</h2>
        <Video videoId={authorsData.videoId} />
        <h2 className="authorTitle">Галерея</h2>
        <PhotoGallery galleryWork={authorsData.work} />
        <h2 className="authorTitle">Карта</h2>
        <Map />
      </main>
    </Layout>
  );
};

authPage.propTypes = {
  data: PropTypes.object,
};

authPage.defaultProps = {
  data: {},
};

export default withI18next()(authPage);

export const query = graphql`
  query($lng: String!, $originalPath: String!) {
    locales: allLocale(filter: { lng: { eq: $lng } }) {
      ...TranslationFragment
    }
    javascriptFrontmatter(
      frontmatter: { path: { eq: $originalPath }, lang: { eq: $lng } }
    ) {
      frontmatter {
        name
        date
        img
        vita
        videoId
        birthPlace
        timelineData {
          date
          text
        }
        work {
          title
          date
          img
        }
      }
    }
  }
`;
