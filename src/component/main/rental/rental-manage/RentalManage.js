import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import * as actions from 'actions';
import RentalManageCard from './RentalManageCard'
import {connect} from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class RentalManage extends Component {
    constructor() {
        super();

        this.state = {
            userRentals: [],
            errors: [],
            isFetching: false
        }
        // this.deleteRental = this.deleteRental.bind(this);
    }
    notify = (content) => toast.success(content);
    componentWillMount() {
        this.setState({ isFetching: true });

        actions.getUserRentals().then(
            userRentals => this.setState({ userRentals, isFetching: false }),
            errors => this.setState({ errors, isFetching: false }))
    }
    renderRentalManageCard() {
        this.state.userRentals.map((i, index) => {
            return (
                <RentalManageCard key={index} rental={i} />
            )
        })
    }
    componentDidUpdate(){
        // this.props.isDeleted && this.addNotification('Xóa thành công', "success")
        // this.props.dispatch(actions.resetRentalsState())
    }
    render() {
        
        const { posted, isDeleted } = this.props.location.state || false;
        {
            isDeleted && this.notify("Đã xóa thành công")
        }
        return (
            <div>
                <div className="container">
                <ToastContainer/>
                    <h4 className="text-left title_h3 type1 animated fadeInLeft">Danh sách nhà mà bạn cho thuê</h4>
                    <div id="sub_home" className="text-center ">
                        <div className="container mg-top-20 ">
                            {
                                posted &&
                                <div className="boxtrue">Đăng thông tin thành công</div>
                            }
                            <div className="row">
                                {
                                    this.state.userRentals.length > 0 &&
                                    this.state.userRentals.map((i, index) => {
                                        return (<Fragment key={index}>
                                            <RentalManageCard rental={i} key={index} />
                                        </Fragment>)
                                    })
                                }
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
        rentals: state.rentals,
        isDeleted: state.rentals.isDeleted
    }
}
export default connect(mapStateToProps)(RentalManage);