import React, { Component} from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './style.scss'
import {fetchUserRentals} from './actions'
import RentalCell from './RentalCell';
class RentalManage extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUserRentals())
    }
    render() {
        return (
            <div className="user-rental-page" style={{ backgroundColor: "#f5f5f5" }}>
                <ToastContainer/>
                <div className="rental-history-container">
                    <div className="rental-history-title">
                        Danh sách nhà đã cho thuê
                    </div>
                    <div className="rental-history-content">
                        {
                            
                            this.props.rentals.map(i=>
                                <Link to={`/detail/${i._id}`}>
                                <RentalCell rental={i}/>
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
export default connect(mapStateToProps)(RentalManage);