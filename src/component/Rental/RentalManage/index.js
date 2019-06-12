import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './style.scss'
import { fetchUserRentals } from './actions'
import RentalCell from './RentalCell';
import {sortBy} from './actions'

class RentalManage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchUserRentals()
    }
    sortBy = (e) => {
        this.props.sortBy(this.props.rentals, e.target.value)
    }
    render() {
        return (
            <div className="user-rental-page" style={{ backgroundColor: "#f5f5f5" }}>
                <ToastContainer />
                <div className="rental-history-container">
                    <div className="rental-history-title">
                        Danh sách nhà đã cho thuê
                        <select defaultValue="createdAt" onChange={this.sortBy} className="list-sort-selector">
                            <option value="createdAt">Mới nhất</option>
                            <option value="priceAsc">Giá thấp nhất</option>
                            <option value="price">Giá cao nhất</option>
                            <option value="rating">Rating</option>
                            <option value="status">Trang thai</option>
                        </select>
                    </div>
                    <div className="rental-history-content">
                        {

                            this.props.rentals.map(i =>
                                <Link to={`/detail/${i._id}`}>
                                    <RentalCell rental={i} />
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
        rentals: state.rentals.userRentals
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserRentals: () => dispatch(fetchUserRentals()),
        sortBy: (data, sort) => dispatch(sortBy(data, sort)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RentalManage);