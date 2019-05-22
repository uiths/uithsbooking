import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import BookingManageCard from './BookingManageCard'
import { connect } from 'react-redux'
import * as actions from 'actions';
import { ToastContainer } from 'react-toastify';
import './style.scss'
import { SORT_BY_PRICE, SORT_BY_DATE, SORT_BY_DAYS } from '../../../actions/types';
class List_book extends Component {
    componentDidMount() {
        // if(!this.props.userBookings.length>0)
        this.props.dispatch(actions.fetchUserBookings());
    }
    renderRental = () => {
        if (this.props.userBookings.length > 0) {
            this.props.userBookings.map((i, index) => {
                return <BookingManageCard rental={i.rental} key={index} delete={this.delete} />
            })
        }
    }
    handleSelect = (e) => {
        console.log(e.target.value);
        switch(e.target.value){
            case "newest":
                this.props.dispatch({type:SORT_BY_DATE});
            case "price":
                this.props.dispatch({type:SORT_BY_PRICE});
            case "days":
                this.props.dispatch({type:SORT_BY_DAYS});
            default:
        }
        // this.props.dispatch({type:SORT_BY_PRICE})
    }
    bookingDetail = (i) => {
        alert(i.startAt)
    }
    render() {
        const isSuccess = this.props.isSuccess
        return (
            <div>
                <ToastContainer autoClose={3000} />
                <div className="container one-page-container">
                    <br />
                    <h4 className="text-left title_h3 type1 animated fadeInLeft">Danh sách nhà mà bạn thuê</h4>
                    <select defaultValue="newest" onChange={this.handleSelect} className="list-sort-selector js-toggle-this">
                        <option value="toPrice">Tổng chi phí</option>
                        <option value="price">Giá</option>
                        <option value="newest">Mới nhất</option>
                        <option value="days">Số ngày</option>
                    </select>
                    <div id="sub_home" className="text-center ">
                        <div className="container mg-top-20">
                            {/* {
                            isSuccess &&
                            <div className="boxtrue">Đã xóa thành công</div>
                        } */}
                            <div className="row">
                                {
                                    this.props.userBookings.length > 0 &&
                                    this.props.userBookings.map((i, index) => {
                                        return (
                                            <BookingManageCard owner={i.owner} id={i._id} rental={i} key={index} />
                                        )
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
const mapStateToProps = (state, ownProps) => {
    return {
        bookingReducer : state.userBookings,
        userBookings: state.userBookings.data,
        isSuccess: state.userBookings.isSuccess
    }
}
export default connect(mapStateToProps)(List_book);