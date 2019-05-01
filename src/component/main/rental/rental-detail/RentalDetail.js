import React, { Component } from 'react';
import { connect } from 'react-redux';
import RentalImages from './RentalImages';
import { RentalAssets } from './RentalAssets';
import { RentalInfo } from './RentalDetailInfo'
import * as actions from 'actions';
import RentalDateForm from './RentalDateForm'
import { startSubmit, stopSubmit } from 'redux-form'
import Loading from "component/main/user/loading"
import { formatNumber } from 'helpers/index'
import {Link} from 'react-router-dom'
import authService from 'services/auth-service';

// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";
import "./style.scss"

class RentalDetail extends Component {

  componentWillMount() {
    // Dispatch action
    window.scrollTo(0, 0)
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }
  constructor(props) {
    super(props);
    this.state = {
      booked: false,
      errors: []
    }
    this.book = this.book.bind(this);
  }
  book(bookData) {
    const booking = {
      startAt: bookData.startAt,
      endAt: bookData.endAt,
      guests: bookData.guests,
      id: this.props.match.params.id,
      price: this.props.rental.price
    }
    this.setState({
      booked: false,
      errors: []
    })
    this.props.dispatch(actions.createBooking(booking))
    // this.props.dispatch(startSubmit('rentalDateForm'))
    // actions.createBooking(booking)
    //   .then(res => {
    //     (booked) => {
    //       console.log(booked)
    //       this.setState({ booked: booked })
    //       this.props.dispatch(stopSubmit('rentalDateForm'))
    //     },
    //       (errors) => {
    //         this.setState({ errors: errors })
    //         console.log(this.state)
    //         this.props.dispatch(stopSubmit('rentalDateForm'))
    //       }
    //   }
    //   )

  }
  
  render() {
    const owner = this.props.rental.user
    const errors = this.props.booking.errors
    const isSuccess = this.props.booking.isSuccess
    // const images = []
    // if (this.props.rental.image) {
    //   this.props.rental.image.map(i => {
    //     images.push({
    //       original: i,
    //       thumbnail: i
    //     })
    //   })
    // }
    if (this.props.rental._id) {
      return (
        <div id="rent">
          <div className="container">
            <div className="detail-up">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  {/* <ImageGallery items={images} /> */}
                  <RentalImages image={this.props.rental.image} />
                </div>
              </div>
            </div>

            <div className="col-sm-8">
            <div className="rental-owner">
                  <p>Chủ nhà: {owner.username}</p>
                  <img style={{width:"56px",height:"56px",borderRadius:"50%"}} src={owner.image}></img>
                  <p style={{color:"#53525a"}}>Lời từ chủ nhà ví dụ {owner.message}</p>
                  {authService.getId()===owner._id && <button><Link to={{pathname:`/edit/${this.props.rental._id}`,state:{rental:this.props.rental}}}>Nút chỉnh sửa chỉ hiện khi là chủ nhà</Link></button>}
                </div>
              <div className="infobox">
                
                <h3>{this.props.rental.title}</h3>
                <h6 style={{ color: "gray" }}>{this.props.rental.address}</h6>
                <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" href="#description">Mô tả</a></li>
                  <li><a data-toggle="tab" href="#info">Thông tin</a></li>
                  <li><a data-toggle="tab" href="#goods">Tiện nghi</a></li>
                </ul>
                <div className="tab-content">
                  <div id="description" className="tab-pane fade in active">
                    <br />
                    <p>{this.props.rental.description}</p>
                  </div>
                  <RentalAssets rental={this.props.rental} />
                  <div id="info" className="tab-pane fade">
                    <br />
                    <i className="fa fa-bed"> {this.props.rental.bedrooms} giường</i> <br />
                    <br />
                    <i className="fa fa-male"> Tối đa {this.props.rental.people} người ở</i> <br />
                    <br />
                    <i className="fa fa-bath"> {this.props.rental.bathrooms} phòng tắm</i> <br />
                    <br />
                  </div>

                </div>
              </div>

            </div>
            <div className="col-sm-4">
              <div className="divide">
                <div className="price-tag">

                </div>
                <div className="infobox slide-in-right">
                  <h3 style={{ marginTop: "30px" }}>Giá: <b>{formatNumber(this.props.rental.price)}</b> đ / ngày</h3>
                  {
                    isSuccess &&
                    <div className="boxtrue">Đã đặt phòng thành công</div>
                  }
                  <RentalDateForm submitCb={this.book} people={this.props.rental.people} errors={errors} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else return <Loading />
  }
}
function mapStateToProps(state) {
  return {
    booking: state.userBookings,
    rental: state.rental.data,
    errors: state.rental.errors
  }
}
export default connect(mapStateToProps)(RentalDetail)