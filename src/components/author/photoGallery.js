import React from 'react';
import PropTypes from 'prop-types';

let SlideShow;

class PhotoGallery extends React.Component {
  componentDidMount() {
    SlideShow = require('react-image-show').default;
    this.forceUpdate();
  }

  render() {
    const { galleryWork } = this.props;
    const photo = galleryWork.map(event => require(`../../images/directors/${event.img}`));
    if (SlideShow) {
      return (
        <SlideShow
          images={photo}
          width="920px"
          imagesWidth="800px"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          indicators
          thumbnails
          fixedImagesHeight
        />
      );
    } return null;
  }
}

PhotoGallery.propTypes = {
  galleryWork: PropTypes.array,
};

PhotoGallery.defaultProps = {
  galleryWork: [],
};

export default PhotoGallery;
