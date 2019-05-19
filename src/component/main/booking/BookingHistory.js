import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import BookingManageCard from '../booking/BookingManageCard'
import { connect } from 'react-redux'
import { formatDate } from 'helpers/index'
import * as actions from 'actions';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {fx} from 'money'
class BookingHistory extends Component {
    componentWillMount() {
        if (!this.props.userBookings.length > 0)
            this.props.dispatch(actions.fetchUserBookings());
    }

    bookingDetail = (i) => {
        alert(i.startAt)
    }
    render() {

        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
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
        const isSuccess = this.props.isSuccess
        fx.base = "VND";
        fx.rates = {
            "USD": 0.000043
        }
        console.log()
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
                                                <td>{formatDate(i.createdAt, "DD/MM/YYYY")}</td>
                                                <td>{formatDate(i.startAt, "DD/MM/YYYY")}</td>
                                                <td>{formatDate(i.endAt, "DD/MM/YYYY")}</td>
                                                <td>{i.totalPrice} đ</td>
                                                <td>{i.guests}</td>
                                                <td>{<PaypalExpressBtn env={env} client={client} currency={currency} total={parseFloat(fx.convert(i.totalPrice, {from: "VND", to: "USD"})).toFixed(2)} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                                                }</td>
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