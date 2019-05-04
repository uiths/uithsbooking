import React, { Component } from 'react';
import { connect } from 'react-redux';
import RentalImages from './RentalImages';
import { RentalAssets } from './RentalAssets';
import { RentalInfo } from './RentalDetailInfo'
import * as actions from 'actions';
import RentalDateForm from './RentalDateForm'
import { startSubmit, stopSubmit } from 'redux-form'
import Loading from "component/main/user/loading"
import {formatNumber} from 'helpers/index'
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
    console.log(bookData);
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
    { console.log(this.props) }
    const errors = this.props.booking.errors
    const isSuccess = this.props.booking.isSuccess
    if (this.props.rental._id) {
      return (
        <div id="rent">
          <RentalImages image={this.props.rental.image} />
          <br />
          <div className="container">
            <div>
              <div className="col-sm-8">
                <div>
                  <div className="infobox slide-in-left" style={{marginBottom:"20px"}}>
                    <p>Chủ nhà và avatar chủ nhà + rating</p>
                  </div>
                    <div className="infobox slide-in-left" style={{backgroundColor:"#673AB7"}}>
                        <h2 id="null" style={{fontWeight:"bold",color:"white"}}>{this.props.rental.title}</h2>
                        <h6 style={{ color: "white" }}>{this.props.rental.address}</h6>

                    </div>
                    <div className="infobox slide-in-left">
                    <div>
                        <h3 className="text-left bor type1"
                            style={{marginBottom:"20px",padding:"10px", fontSize:"27px"}}>Mô tả </h3>
                      <div>
                        <br />
                        <p>{this.props.rental.description}</p>
                      </div>
                        <hr/>
                        <h3 className="text-left bor type1"
                            style={{marginBottom:"20px",padding:"10px", fontSize:"27px"}}>Thông tin </h3>
                        <RentalAssets rental={this.props.rental} />
                        <hr/>
                        <h3 className="text-left bor type1"
                            style={{marginBottom:"20px",padding:"10px", fontSize:"27px"}}>Tiện nghi </h3>
                        <div>
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

              </div>


            </div>
            <div className="col-sm-4">
              <div className="divide">
                <div className="infobox slide-in-right" style={{backgroundColor:"black"}}>
                  <h3 style={{color:"white"}}>Giá: <b>{formatNumber(this.props.rental.price)}</b> đ / ngày</h3>
                </div>
                <div className="infobox slide-in-right">
                  {
                    isSuccess &&
                    <div className="boxtrue">Đã đặt phòng thành công</div>
                  }
                  <RentalDateForm submitCb={this.book} people={this.props.rental.people} errors={errors} />
                  <br />
                  {/* <div className="modal fade" id="payment" role="dialog">
                  <div className="modal-dialog">


                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Thanh toán</h4>
                      </div>
                      <div className="modal-body">
                        <p>Truyền prob thông tin thanh toán vào đây.</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Thanh toán</button>
                      </div>
                    </div>
                  </div>
                </div> */}
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