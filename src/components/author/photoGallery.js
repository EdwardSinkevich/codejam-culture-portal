import React from 'react';
import SlideShow from 'react-image-show';

class PhotoGallery extends React.Component {
  render() {
    const photo = this.props.galleryWork.map(event => require(`../../images/directors/${event.img}`));
    const result = (
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
    return result;
  }
}

export default PhotoGallery;
