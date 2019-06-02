import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {fetchUserBookings} from './actions'
import BookingCell from './BookingCell'
import _ from 'lodash'
import './style.scss'
class BookingHistory extends Component {
    componentWillMount() {
        if (_.isEmpty(this.props.userBookings))
            this.props.fetchUserBookings();
    }

    render() {
            return (
            <div className="user-booking-history" style={{backgroundColor:"#f5f5f5"}}>
                <div className="booking-history-container">
                    <div className="booking-history-title">
                        Lịch sử thuê phòng
                    </div>
                    <div className="booking-history-content">
                        {
                            
                            this.props.userBookings.map(i=>
                                <Link to={`/booking/${i._id}`}>
                                <BookingCell booking={i}/>
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
        userBookings: state.userBookings.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserBookings: () => dispatch(fetchUserBookings())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingHistory);