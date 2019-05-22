import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { formatDate, toUSD } from 'helpers/index'
import * as actions from 'actions';
import Loading from 'component/Loading';
import BookingCell from './BookingCell'
import './style.scss'
class BookingHistory extends Component {
    componentWillMount() {
        if (!this.props.userBookings.length > 0)
            this.props.dispatch(actions.fetchUserBookings());
    }

    render() {
        const isSuccess = this.props.isSuccess
            return (
            <div style={{backgroundColor:"#f5f5f5"}}>
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
                {/* <div className="container">
                    <h4 className="text-left title_h3 type1 animated fadeInLeft">Danh sách nhà mà bạn thuê</h4>
                    <div id="sub_home" className="text-center ">
                        <div className="container mg-top-20">
                            {
                                isSuccess &&
                                <div className="boxtrue">Đã xóa thành công</div>
                            }
                            <table id="history">
                                <tbody>
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
                                                    <td>{formatDate(i.createdAt, "DD/MM/YYYY")}</td>
                                                    <td>{formatDate(i.startAt, "DD/MM/YYYY")}</td>
                                                    <td>{formatDate(i.endAt, "DD/MM/YYYY")}</td>
                                                    <td>{i.totalPrice} đ</td>
                                                    <td>{i.guests}</td>
                                                    <td>
                                                    {i.status === 'paid' ? 'Đã thanh toán' : "Pending..."}</td>
                                                </tr>
                                            </Fragment>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
 */}

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