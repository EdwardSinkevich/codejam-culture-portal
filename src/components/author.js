import React from 'react';
import Container from '@material-ui/core/Container';
import { withI18next } from 'gatsby-plugin-i18next';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from './layout';
import SEO from './seo';

import MapComponent from './author/map';
import Video from './author/video';
import TableWork from './author/tableWork';
import PhotoGallery from './author/photoGallery';
import VerticalTimelines from './author/timeLine';
import './author/author.css';

const authPage = ({ data, lng }) => {
  const locale = JSON.parse(data.locales.edges[0].node.data);
  const authorsData = data.javascriptFrontmatter.frontmatter;
  const authorImage = require(`../images/directors/${authorsData.img}`);

  return (
    <Layout data={data} lng={lng}>
      <SEO title="Author page" />
      <Container>
        <h2 className="authorName">{authorsData.name}</h2>
        <div className="authorImage">
          <img src={authorImage} alt="Author" />
        </div>
        <h3 className="authorBirth">{authorsData.date}</h3>
        <h3 className="authorVita">{authorsData.vita}</h3>
        <h2 className="authorTitle">{locale.timeline}</h2>
        <VerticalTimelines timelineData={authorsData.timelineData} />
        <h2 className="authorTitle">{locale.video}</h2>
        <Video videoId={authorsData.videoId} />
        <h2 className="authorTitle">{locale.work}</h2>
        <TableWork work={authorsData.work} />
        <h2 className="authorTitle">{locale.gallery}</h2>
        <PhotoGallery galleryWork={authorsData.work} />
        <h2 className="authorTitle">{locale.map}</h2>
        <MapComponent markerTimeline={authorsData.timelineData} />
      </Container>
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
          width
          length
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
