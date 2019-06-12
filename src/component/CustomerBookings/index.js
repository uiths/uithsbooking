import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getCustomerBookings, sortBy} from './actions'
import {Link} from 'react-router-dom';
import CustomerBookingCell from './CustomerBookingCell';
import './style.scss'
class CustomerBookings extends Component {
    componentDidMount(){
        this.props.getCustomerBookings()
    }
    sortBy = (e) => {
        console.log(this.props.customerBookings)
        this.props.sortBy(this.props.customerBookings, e.target.value)
    }
    render() {
        return (
            <div className="user-booking-history" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="booking-history-container">
                <div className="booking-history-title">
                    Danh sách người thuê phòng
                    <select defaultValue="createdAt" onChange={this.sortBy} className="list-sort-selector">
                        <option value="createdAt">Mới nhất</option>
                        <option value="totalPriceAsc">Tổng chi phí ít nhất</option>
                        <option value="totalPrice">Tổng chi phí cao nhất</option>
                        <option value="days">Số ngày</option>
                        <option value="guests">Số khách</option>
                        <option value="status">Trạng thái</option>                            
                    </select>
                </div>

                <div className="booking-history-content">
                    {

                        this.props.customerBookings.map((i,index) =>
                            <Link key={index} to={`/booking/${i._id}`}>
                                <CustomerBookingCell  booking={i}/>
                                {/* <BookingCell booking={i} /> */}
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        customerBookings: state.userBookings.customerBookings
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        sortBy: (data, field) => dispatch(sortBy(data, field)),
        getCustomerBookings: () => dispatch(getCustomerBookings())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerBookings);