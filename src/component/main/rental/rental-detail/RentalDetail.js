import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RentalImages from './RentalImages';
import { RentalAssets } from './RentalAssets';
import { RentalInfo } from './RentalDetailInfo'
import * as actions from 'actions';
import RentalDateForm from './RentalDateForm'
import Loading from "component/main/user/loading"
import { formatNumber } from 'helpers/index'
import { Link, Redirect } from 'react-router-dom'
import authService from 'services/auth-service';
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comment from 'component/Comment'
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";
import "./style.scss"
import moment from 'moment'
import CommentDisplay from 'component/Comment/CommentDisplay'
class RentalDetail extends Component {
  componentDidMount() {
    // Dispatch action
    window.scrollTo(0, 0);
    if (!this.props.booking.data.length > 0)
      this.props.dispatch(actions.fetchUserBookings());
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }
  constructor(props) {
    super(props);
    this.state = {
      booked: false,
      errors: [],
      show: false
    }
  }
  notify = (text) => toast.success(text);
  notifyE = (text) => toast.error(text);

  deleteRental = (rentalId) => {
    this.props.dispatch(actions.deleteRental(rentalId))
  }
  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  book = (bookData) => {
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
    if (this.isValid(this.props.booking.data, booking))
      this.props.dispatch(actions.createBooking(booking))
    else this.notifyE("Bạn không thể đặt thêm nhà trong khoảng thời gian này")
  }
  isValid(data, booking) {
    for (let i = 0; i < data.length; i++)
      if ((+moment(booking.startAt) <= +moment(data[i].endAt) && +moment(booking.startAt) >= +moment(data[i].startAt)) || (+moment(booking.endAt) <= +moment(data[i].endAt) && +moment(booking.endAt) >= +moment(data[i].startAt)))
        return false;
    return true
  }
  componentDidUpdate() {
    this.props.dispatch(actions.resetRentalState())
  }

  render() {
    const { posted } = this.props.location.state || false
    {
      posted && this.notify("Đăng nhà thành công")
      this.props.dispatch(actions.resetRentalState())
    }
    {
      this.props.isUpdated && this.notify("Cập nhật thành công")
      this.props.dispatch(actions.resetRentalState())

    }
    {
      this.props.booking.isSuccess && this.notify("Đặt phòng thành công")
      // this.props.dispatch(actions.resetBookingState())
    }
    const owner = this.props.rental.user || {}
    const errors = this.props.booking.errors || {}
    const rental = this.props.rental || {}
    // const isSuccess = this.props.booking.isSuccess
    // const images = []
    // if (this.props.rental.image) {
    //   this.props.rental.image.map(i => {
    //     images.push({
    //       original: i,
    //       thumbnail: i
    //     })
    //   })
    // }
    if (this.props.isDeleted) {
      this.handleClose()
      return <Redirect to={{ pathname: "/rental/manage", state: { isDeleted: true } }} />
    }


    return (
      <div id="rent">
        <ToastContainer />
        <RentalImages image={rental.image ? rental.image : ['/img/default-img.jpg', '/img/default-img.jpg']} />
        <br />
        <div className="container">
          <div>
            <div className="col-sm-8">
              <div>
                <div className="infobox slide-in-left row" style={{ marginBottom: "20px", marginLeft:"0", marginRight:"0"}}>
                  <div className="col-lg-8">
                    <img src={owner.image ? owner.image : '/img/default-img.jpg'} className="ravatar" alt="none" />
                    <h4 className="rname">{owner.username && owner.username}</h4>
                  </div>
                  {(authService.isAuthenticated() && (authService.getId() === owner._id)) &&
                    <div className="col-lg-4">
                      <Link to={{ pathname: `/edit/${rental._id && rental._id}`, state: { rental: rental } }}>
                        <button className="b b1 rbutton"><span><i className="fa fa-edit" />   Sửa</span></button>
                      </Link>
                      <button onClick={this.handleShow} className="b b1 rbutton"><span><i className="fa fa-close" />   Xóa</span></button>
                      <Modal style={{ opacity: 1 }} show={this.state.show} onHide={this.handleClose}>
                        <Modal.Body>Bạn có chắc muốn xóa?</Modal.Body>
                        <Modal.Footer>
                          <Button className="b b1" onClick={() => { this.handleClose(); this.deleteRental(this.props.rental._id) }}>
                            Xóa
                            </Button>
                          <Button className="b b1" onClick={this.handleClose}>
                            Đóng
                            </Button>
                        </Modal.Footer>
                      </Modal>

                    </div>
                  }
                  {(authService.isAuthenticated() && (authService.getId() !== owner._id)) &&
                    <Comment rentalId={rental._id && rental._id} />}
                </div>
                <div className="infobox slide-in-left" style={{ backgroundImage:"linear-gradient( 90.2deg, rgba(75,68,229,1) 2%, rgba(97,212,202,1) 98.3% )" }}>
                  <h3 id="null" style={{ fontWeight: "bold", color: "white", fontSize: "25px" }}>{this.props.rental.title}</h3>
                  <h5 style={{ color: "white" }}>{this.props.rental.address}</h5>

                </div>
                <div className="infobox slide-in-left" style={{borderRadius:"0", marginBottom:"50px"}}>
                  <div>
                    <div className="title">
                      <span className="titletext"><i className="fa fa-question-circle titleicon"/>Mô tả</span>
                    </div>
                    <div>
                      <br />
                      <p style={{ whiteSpace: "pre-line", whiteSpace: "pre-wrap" }}>{this.props.rental.description}</p>
                    </div>
                    <div className="title">
                      <span className="titletext"><i className="fa fa-info-circle titleicon"/>Thông tin</span>
                    </div>
                    <div>
                      <div className="block">
                        <i className="fa fa-bed"> {this.props.rental.bedrooms} giường</i> <br />
                      </div>
                      <div className="block">
                        <i className="fa fa-male"> Tối đa {this.props.rental.people} người ở</i> <br />
                      </div>
                      <div className="block">
                        <i className="fa fa-bath"> {this.props.rental.bathrooms} phòng tắm</i> <br />
                      </div>
                    </div>
                    <div className="title">
                      <span className="titletext"><i className="fa fa-check-circle titleicon"/>Tiện nghi</span>
                    </div>
                    <RentalAssets rental={this.props.rental} />
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            {
              (!authService.isAuthenticated() || (authService.isAuthenticated() && !(authService.getId() === owner._id))) &&
              <div className="divide" style={{marginBottom:"20px"}}>
                <div className="infobox slide-in-right" style={{ backgroundImage:"linear-gradient( 90.2deg, rgba(75,68,229,1) 2%, rgba(97,212,202,1) 98.3% )" }}>
                  <h3 style={{ color: "white" }}>Giá: <b>{rental.price && rental.price.toLocaleString()}</b> đ/ngày</h3>
                </div>
                <div className="infobox slide-in-right">

                  <RentalDateForm price={this.props.rental.price} submitCb={this.book} people={this.props.rental.people} errors={errors} />
                  <br />
                </div>
              </div>
            }
            <CommentDisplay rentalId={this.props.match.params.id} />
          </div>
        </div>
      </div>
    );

  }
}
function mapStateToProps(state) {
  return {
    isCreated: state.rental.isCreated,
    isDeleted: state.rentals.isDeleted,
    deleteError: state.rentals.errors,
    isUpdated: state.rental.isUpdated,
    booking: state.userBookings,
    rental: state.rental.data,
    rentals: state.rentals.data,
    errors: state.rental.errors,
    // booking: state.userBookings
    auth: state.auth
  }
}
export default connect(mapStateToProps)(RentalDetail)