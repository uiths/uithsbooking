import React, { Component, Fragment } from 'react';
import ReactCrop from 'react-image-crop';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'react-image-crop/dist/ReactCrop.css';
import './style.scss'
class ImageCropForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      croppedImageUrl: null,
      crop: {
        aspect: this.props.aspect || 12/9,
        width: 50,
        x: 0,
        y: 0
      }
    };
  }
  onImageLoaded = (image) => {
    this.imageRef = image;
  }
  onCropComplete = async(crop, pixelCrop) => {
    await this.makeClientCrop(crop, pixelCrop);
  }
  onCropChange = crop => {
    this.setState({ crop });
  }
  async makeClientCrop(crop, pixelCrop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        pixelCrop);
      this.setState({ croppedImageUrl });
    }
  }
  handleCompleted = () => {
    this.props.onCompleted(this.state.croppedImageUrl);
  }
  getCroppedImg(image, pixelCrop) {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve) => {
      this.fileUrl = canvas.toDataURL('image/jpeg', 1.0);
      resolve(this.fileUrl);
    });
  }
  render() {
    const { crop, croppedImageUrl, src } = this.state;
    return (
      <Fragment>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            keepSelection={true}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange} />
        )}
        {src && (
          <div className="clearfix text-center">
            <Button
              onClick={this.handleCompleted}
              className="btn-fw-96"
              bsstyle="primary"
              // disabled={!croppedImageUrl ? true : false}
            >
              Crop
            </Button>
            <Button
              onClick={this.props.onClose}
              className="btn-close"
              bsstyle="primary"
              // disabled={!croppedImageUrl ? true : false}
            >
              Close
            </Button>
          </div>
        )}
      </Fragment>
    );
  }
}

ImageCropForm.propTypes = {
  src: PropTypes.string.isRequired,
  onCompleted: PropTypes.func.isRequired
};

export default ImageCropForm;