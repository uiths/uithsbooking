import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import BookingManageCard from '../booking/BookingManageCard'
import { connect } from 'react-redux'
import { formatDate } from 'helpers/index'
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
                                <table id="history">
                                    <tr>
                                        <th>Tên</th>
                                        <th>Số ngày</th>
                                        <th>Ngày đặt</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc</th>
                                        <th>Tổng giá</th>
                                        <th>Số khách</th>
                                        <th>Trạng thái</th>
                                    </tr>

                                    {
                                    this.props.userBookings.length > 0 &&
                                    
                                    this.props.userBookings.map((i, index) => {
                                        return (<Fragment key={index}>
                                            <tr>
                                                <td><Link to={`/detail/${i.rental._id}`}>{i.rental.title}</Link></td>
                                                <td>{i.days}</td>
                                                <td>{formatDate(i.createdAt,"DD/MM/YYYY")}</td>
                                                <td>{formatDate(i.startAt,"DD/MM/YYYY")}</td>
                                                <td>{formatDate(i.endAt,"DD/MM/YYYY")}</td>
                                                <td>{i.totalPrice.toLocaleString()} đ</td>
                                                <td>{i.guests}</td>
                                                <td>{i.status}</td>
                                            </tr>
                                        </Fragment>)
                                    })
                                }
                            </table>
                                {/* <RentalCard rental={this.props.userBookings.rental}/> */}
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