import React from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player/lib/players/YouTube';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
  },
};

class Video extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const urlVideo = `https://www.youtube.com/watch?v=${this.props.videoId}`;
    return (
      <div className="videoOverlay">
        <Button class="openModal" onClick={this.openModal} variant="contained">
          Open Modal
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <form>
            <ReactPlayer
              url={urlVideo}
              playing={false}
              controls
            />
          </form>
        </Modal>
      </div>
    );
  }
}

export default Video;
