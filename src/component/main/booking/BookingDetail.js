import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RentalImages from 'component/main/rental/rental-detail/RentalImages';
import { RentalAssets } from 'component/main/rental/rental-detail/RentalAssets';
import { RentalInfo } from 'component/main/rental/rental-detail/RentalDetailInfo';
import * as actions from 'actions';
import Loading from "component/main/user/loading"
import { formatNumber, toUSD } from 'helpers/index'
import { Link, Redirect } from 'react-router-dom'
import authService from 'services/auth-service';
import { Modal, Button } from 'react-bootstrap'
import { formatDate, isEmpty } from 'helpers/index'
import PaypalExpressBtn from 'react-paypal-express-checkout';

// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";
// import "./style.scss"

class BookingDetail extends Component {
    componentWillMount() {
        // Dispatch action
        console.log(this.props.location.state)
        window.scrollTo(0, 0)
        const bookingId = this.props.match.params.id;
        console.log(bookingId);
        this.props.dispatch(actions.fetchBookingById(bookingId));
        // this.props.dispatch(actions.fetchBookingById(this.props.location.state.id))
        // this.props.dispatch(action.fetchBookingById())
    }
    constructor(props) {
        super(props);
        this.state = {
            booked: false,
            errors: [],
            show: false
        }
    }

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
        this.props.dispatch(actions.createBooking(booking))
    }

    componentDidUpdate() {
        console.log(this.props.isCreated)
        // this.props.isCreated && this.addNotification('Tạo thành công', "success")
        this.props.dispatch(actions.resetRentalState())
    }
    delete = (bookingId) => {
        this.props.dispatch(actions.deleteBooking(bookingId))
    }

    render() {
        console.log(this.props.booking)
        const booking = this.props.booking
        const owner = this.props.booking.owner || {};
        const rental = this.props.booking.rental;
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            const data = {
                toUser: owner._id,
                booking: booking._id,
                totalPrice: booking.totalPrice,
                payerID: payment.payerID,
                paymentID: payment.paymentID,
                paymentToken: payment.paymentToken,
            }
            this.props.dispatch(actions.createPayment(data))
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: 'AejbPR5WPbaNy-8nOCslLZEn6dY8VtGeH1LxFIGZT8e-hihHe4hmEzmAyOYQifAC_hEp7AeNvUIIYqMs',
            production: 'Aa05uaG4gJWB23ezy_b3bqTXVs-01Ao2QKBgYI5NzbUfKRDIrxOA8n3JmQTWp__K_sqIG7qpb5Lfv6V5',
        }
        if (this.props.isDeleted) {
            return <Redirect to={{ pathname: "/list_book", state: { deleted: true } }} />
        }

        // const errors = this.props.booking.errors
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
        // if (this.props.booking.isSuccess) {
        //     this.handleClose();
        //     return <Redirect to="/list_book" />
        // }
        // if (this.props.rental._id) {
        if (!isEmpty(this.props.booking))
            return (
                <div id="rent">
                    <RentalImages image={rental && rental.image } />
                    <br />
                    <div className="container">
                        <div>
                            <div className="col-sm-8">
                                <div>
                                    <div className="infobox slide-in-left row" style={{ marginBottom: "20px" }}>
                                        <div className="col-lg-8">
                                            <img src={owner.image} className="ravatar" alt="none" />
                                            <h4 className="rname">{owner.username}</h4>
                                        </div>

                                    </div>
                                    <div className="infobox slide-in-left" style={{ backgroundColor: "#4B0082" }}>
                                        <h3 id="null" style={{ fontWeight: "bold", color: "white", fontSize: "25px" }}>{rental.title}</h3>
                                        <h5 style={{ color: "white" }}>{rental.address}</h5>

                                    </div>
                                    <div className="infobox slide-in-left">
                                        <div>
                                            <h3 className="text-left bor type1"
                                                style={{ padding: "5px", fontSize: "27px" }}>Mô tả </h3>
                                            <div>
                                                <br />
                                                <p style={{ whiteSpace: "pre-line", whiteSpace: "pre-wrap" }}>{rental.description}</p>
                                            </div>
                                            <hr />
                                            <h3 className="text-left bor type1"
                                                style={{ padding: "5px", fontSize: "27px" }}>Thông tin </h3>
                                            <div>

                                                <div className="block">
                                                    <i className="fa fa-bed"> {rental.bedrooms} giường</i> <br />
                                                </div>
                                                <div className="block">
                                                    <i className="fa fa-male"> Tối đa {rental.people} người ở</i> <br />
                                                </div>
                                                <div className="block">
                                                    <i className="fa fa-bath"> {rental.bathrooms} phòng tắm</i> <br />
                                                </div>
                                            </div>
                                            <hr />
                                            <h3 className="text-left bor type1"
                                                style={{ padding: "5px", fontSize: "27px" }}>Tiện nghi </h3>
                                            <RentalAssets rental={rental} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            {
                                !(authService.getId() === owner._id) &&
                                <div className="divide">
                                    <div className="infobox slide-in-right" style={{ backgroundColor: "#4B0082" }}>
                                        <h3 style={{ color: "white" }}>Giá: <b>{formatNumber(rental.price)}</b> đ / ngày</h3>
                                    </div>
                                    <div className="infobox" style={{ padding: "20px" }}>
                                        <h4 style={{ fontWeight: "bold" }}>Số ngày:</h4>
                                        <p>{booking.days}</p>
                                        <h4 style={{ fontWeight: "bold" }}>Ngày đặt:</h4>
                                        <p>{formatDate(booking.createdAt, "DD/MM/YYYY")}</p>
                                        <h4 style={{ fontWeight: "bold" }}>Ngày bắt đầu:</h4>
                                        <p>{formatDate(booking.startAt, "DD/MM/YYYY")}</p>
                                        <h4 style={{ fontWeight: "bold" }}>Ngày kết thúc:</h4>
                                        <p>{formatDate(booking.endAt, "DD/MM/YYYY")}</p>
                                        <h4 style={{ fontWeight: "bold" }}>Tổng giá:</h4>
                                        <p>{booking.totalPrice.toLocaleString()} đ</p>
                                        <h4 style={{ fontWeight: "bold" }}>Số khách:</h4>
                                        <p>{booking.guests}</p>
                                        <h4 style={{ fontWeight: "bold" }}>Trạng thái:</h4>
                                        <p>{booking.status}</p>
                                        <hr />
                                        {(booking.status && booking.status === "pending") &&
                                            <Fragment>
                                                <PaypalExpressBtn env={env} client={client} currency={currency} total={toUSD(booking.totalPrice)} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                                                <button onClick={this.handleShow} className="b b1 center_button"><span><i className="fa fa-close" />   Xóa</span></button>
                                            </Fragment>
                                        }
                                        <Modal style={{ opacity: 1 }} show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Body>Bạn có chắc muốn xóa?</Modal.Body>
                                            <Modal.Footer>
                                                <Button className="b b1" onClick={() => { this.handleClose(); this.delete(booking._id) }}>
                                                    Xóa
                                        </Button>
                                                <Button className="b b1" onClick={this.handleClose}>
                                                    Đóng
                                        </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                </div>

            )
            else return <Fragment>
                <Loading />
             </Fragment> ;
        // }
        // else return <Fragment>
        //     <Loading />
        //     <ReactNotification ref={this.notificationDOMRef} />
        // </Fragment>
    }
}
function mapStateToProps(state) {
    return {
        isCreated: state.rental.isCreated,
        isDeleted: state.userBookings.isDeleted,
        deleteError: state.rentals.errors,
        isUpdated: state.rental.isUpdated,
        // booking: state.userBookings,
        rental: state.rental.data,
        errors: state.rental.errors,
        auth: state.auth,
        booking: state.userBookings.booking
    }
}
export default connect(mapStateToProps)(BookingDetail)