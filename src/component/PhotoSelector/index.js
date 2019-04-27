import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageCropForm from 'component/ImageCropForm';
import { readURL, dataURItoBlob, uploadAvatar } from 'helpers/index';
import { Modal } from 'react-bootstrap';
import './style.css';

const loaderURL = 'img/loader.gif'
class PhotoSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      imageForCrop: null,
      loading: false,
      imageBase64: null
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }
  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleSelectedFile = async (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      if (!files[0].type.startsWith("image")) {
        return;
      }

      try {
        const imageDataURL = await readURL(files[0]);
        this.setState({ imageForCrop: `${imageDataURL}` });
        this.handleOpen();
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  handleCompleted = async (imageUrl) => {
    this.handleClose();
    this.setState({ loading: true });
    const blob = dataURItoBlob(imageUrl);
    try {
    
      // const avatarId = 'ABC'
      // const avatarId = await this.handleUploadFile(blob);
      // this.props.addItem({ imageUrl: imageUrl, imageId: avatarId }, this.props.frameKey);
      this.setState({ loading: false, imageBase64: imageUrl }, this.props.input.onChange(this.state.imageBase64));
    } catch (e) {
      console.log(e.message);
    }
  }
  removeItem = () => {
    this.setState(
      { imageBase64: null},
      this.props.input.onChange(this.state.imageBase64));   
  }
  // async handleUploadFile(file) {
  //   try {
  //     const image = await uploadAvatar(file);
  //     const { objectId } = await request('classes/Image', {
  //       file: { ...image, '__type': 'File' },
  //       type: 'AVATAR',
  //       name: image.name
  //     }, 'POST');
  //     return objectId || null;
  //   } catch (e) {
  //     return null;
  //   }
  // }

  render() {
    let fileTrigger = null;
    let cornerButton = null;
    let cornerBtnAction = null;
    let background = "none";

    let inputId = "imageUploadMyPage" + this.props.frameKey;

    if (this.state.imageBase64) {
      // remove mode
      cornerBtnAction = this.removeItem;
      cornerButton = <div className="corner-btn" onClick={cornerBtnAction}><img src="/img/remove-upload-image.svg" /></div>;

      background = "url('" + this.state.imageBase64 + "')";
    } else {
      // upload mode
      cornerButton = <div className="corner-btn" onClick={cornerBtnAction}><img src="/img/add-upload-image.svg" /></div>;
      fileTrigger = <label htmlFor={inputId}></label>;
      background = this.state.loading ? "url('" + loaderURL + "')" : 'none';
    }

    return (
      <div className="photo-selector square" style={{ backgroundImage: background }}>
        {cornerButton}
        {fileTrigger}
        <input
          type='file'
          id={inputId}
          accept=".png, .jpg, .jpeg"
          onChange={e => this.handleSelectedFile(e)} />


        <Modal style={{opacity:1}} backdrop='static' keyboard={false} show={this.state.isOpen} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Crop Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              {
                this.state.imageForCrop ? 
                  <ImageCropForm
                  onClose ={this.handleClose}
                  onCompleted={this.handleCompleted}
                  src={this.state.imageForCrop} />
                :
                  <div></div>
              }
              
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

PhotoSelector.propTypes = {
  imageId: PropTypes.any,
  imageUrl: PropTypes.string,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  frameKey: PropTypes.string
};
export default PhotoSelector;