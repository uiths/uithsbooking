import React from 'react';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import { toast } from 'react-toastify';
import * as actions from 'actions';


export class BwmFileUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      redirect: false,
      imageSrc: [],
      imageFiles: [],
      imgSrc: '',
      isChange: false,
      title: '',
      city: '',
      address: '',
      category: 'apartment',
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      bathrooms: 1,
      bedrooms: 1,
      people: 1,
      isWifi: false,
      isTv: false,
      isFridge: false,
      isElevator: false,
      isConditioner: false,
      isWashing: false,
      isLoad: false,
      description: '',
      price: 100000,
      isLoading: false
    }
    this.options = ['Căn hộ', 'Villa']
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "image1" || e.target.name === "image2" || e.target.name === "image3"
      || e.target.name === "image4" || e.target.name === "image5") {
      let tempArr = this.state.imageSrc;
      let tempArr2 = this.state.imageFiles;
      let temp = URL.createObjectURL(e.target.files[0]);
      if (e.target.name === "image1") {
        this.setState({
          image1: e.target.files[0],

          isLoad: true
        })
        tempArr2[0] = e.target.files[0];
        tempArr[0] = temp;
      }
      if (e.target.name === "image2") {
        this.setState({
          image2: e.target.files[0]
        })
        tempArr2[1] = e.target.files[0];
        tempArr[1] = temp;
      }
      if (e.target.name === "image3") {
        this.setState({
          image3: e.target.files[0]
        })
        tempArr2[2] = e.target.files[0];
        tempArr[2] = temp;
      }
      if (e.target.name === "image4") {
        this.setState({
          image4: e.target.files[0]
        })
        tempArr2[3] = e.target.files[0];
        tempArr[3] = temp;
      }
      if (e.target.name === "image5") {
        this.setState({
          image4: e.target.files[0]
        })
        tempArr2[4] = e.target.files[0];
        tempArr[4] = temp;
      }
      this.props.imageFiles =tempArr2
      this.setState({ imageSrc: tempArr, imageFiles: tempArr2 });
    }
    else {
      let temp = e.target.value;
      if (temp === "true")
        temp = true
      this.setState({
        [e.target.name]: temp
      })
    }
  }
  render() {
    return (
      <div className='img-upload-container'>
        <label className='img-upload btn btn-bwm'>
          {/* <span className='upload-text'> Select an image </span> */}
          <input type='file'
            accept='.jpg, .png, .jpeg'
            onChange={this.onChange} />
        </label>
      </div>
    )
  }
}




