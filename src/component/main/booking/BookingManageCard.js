import React, { Component } from 'react';
import moment from 'moment'
import {formatNumber} from 'helpers/index';
import {Link} from 'react-router-dom'
import * as actions from 'actions'
import {connect} from 'react-redux'
class BookingManageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rental : {}
        }
    }
    componentWillMount(){
        // this.props.dispatch(actions.fetchBookingById(this.props.id))
    }
    delete = (bookingId) => {
        this.props.dispatch(actions.deleteBooking(bookingId))
    }
    render() {
        const rental = this.props.rental.rental;
        const booking = this.props.rental;
        const owner = this.props.owner
        return (
            
            < React.Fragment >
            <div className="sub_home_slider_container">
            {/* <div className="sub_home_slider_container"> */}
                <Link className="sub_home_link"  to={{pathname:`/booking/${booking._id}`,state:{booking:booking}}}>
                    <img className="sub_home_fix_img" src={rental.image[0]} alt="Snow" width="100%" />
                    <p className="sub_home_text_p">{rental.address}</p>
                    <h3 className="sub_home_text_h3">{rental.title}</h3>
                    <div className="sub_home_text_price">{rental.price.toLocaleString()} VNĐ</div>
                    <div className="sub_home_star"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></div>
                </Link>
            {/* </div> */}
            </div>
                {/* <div className="col-sm-3">
                    <div className="sub_home_slider_container sub_home_slider_container_list_rent">
                        <Link to={{pathname:`/booking/${rental._id}`,state:{booking:booking}}}><img src={rental.image[0]} alt="Snow" width="100%" /></Link>
                        <div className="middle"> */}
                            {/* <a href="#" title=""><i
                                        className="fa fa-plus" aria-hidden="true" /></a> */}
                            {/* <a href="#" data-toggle="modal" data-target={`#detailModal${booking._id}`} title=""><i
                                className="fa fa-edit" aria-hidden="true" /></a>
                            <a href="#" data-toggle="modal" data-target={`#deleteModal${booking._id}`} title=""><i
                                className="fa fa-close" aria-hidden="true" /></a> */}
                        {/* </div>
                        <p><b>{rental.title}</b>
                            <br />
                            {rental.price}
                        </p>
                    </div>
                </div> */}
                {/*Modal Content*/}
                <div className="modal fade" id={`detailModal${booking._id}`} role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Thông tin đặt phòng</h4>
                            </div>
                            <div className="modal-body">
                                <p><b>Số người: </b> {booking.guests}</p>
                                <p><b>Ngày đặt phòng: </b>{moment(booking.startAt).format('DD/MM/YYYY')}</p>
                                <p><b>Ngày trả phòng: </b>{moment(booking.endAt).format('DD/MM/YYYY')}</p>
                                <p><b>Số ngày: </b>{booking.days}</p>
                                <p><b>Tổng giá: </b>{formatNumber(booking.totalPrice)} đồng</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id={`deleteModal${booking._id}`} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Xóa phòng đã đặt</h4>
                            </div>
                            <div className="modal-body">
                                <p>Bạn chắc chắn sẽ xóa?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={()=> this.delete(booking._id)}>OK</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        rentals: state.rentals,
        booking: state.userBookings
    }
}
export default connect(mapStateToProps) (BookingManageCard);