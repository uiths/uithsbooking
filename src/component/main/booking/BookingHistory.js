import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import BookingManageCard from '../booking/BookingManageCard'
import { connect } from 'react-redux'
import * as actions from 'actions';
import { stat } from 'fs';
class BookingHistory extends Component {
    componentWillMount() {
        if (!this.props.userBookings.length > 0)
            this.props.dispatch(actions.fetchUserBookings());
    }
  
    bookingDetail = (i) => {
        alert(i.startAt)
    }
    compare = (a, b) => {
        if (a.guests < b.guests) {
            return -1;
        }
        if (a.guests > b.guests) {
            return 1;
        }
        return 0;
    }

    render() {
        console.log(this.props.userBookings)
        console.log(this.props.userBookings.filter(i =>
            i.guests > 2
        ))
        const isSuccess = this.props.isSuccess
        return (
            <div>
                <div className="container">
                    <h4 className="text-left title_h3 type1 animated fadeInLeft">Danh sách nhà mà bạn thuê</h4>
                    <div id="sub_home" className="text-center ">
                        <div className="container mg-top-20">
                            {
                                isSuccess &&
                                <div className="boxtrue">Đã xóa thành công</div>
                            }
                            <div className="row">
                                {
                                    this.props.userBookings.length > 0 &&
                                    
                                    this.props.userBookings.map((i, index) => {
                                        return (<Fragment key={index}>
                                        <div>{i.startAt}</div>
                                        </Fragment>)
                                    })
                                }

                                {/* <RentalCard rental={this.props.userBookings.rental}/> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userBookings: state.userBookings.data,
        isSuccess: state.userBookings.isSuccess
    }
}

export default connect(mapStateToProps)(BookingHistory);