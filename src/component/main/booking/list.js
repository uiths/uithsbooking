import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import * as actions from 'actions'
import RentalCard from '../index/rentalCard'
import { connect } from 'react-redux'
import Loading from 'component/main/user/loading'
import Pagination from './Pagination';

import "./style.scss"

class List extends Component {
    constructor(props) {
        super(props);
        this.renderRentals = this.renderRentals.bind(this);
        this.state = {
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(actions.resetBookState());
        if(this.props.rentals.length===0)
        this.props.dispatch(actions.fetchRentals());
    }

    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return (
                <RentalCard key={index} rental={rental} />
            )
        })
    }


    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });

    }

    render() {
        // if(this.props.rentals && this.props.rentals.length > 0){
        return (
                <div className="container list-rentals-container">
                    <h3 className="text-left title_h3 type1 animated fadeInLeft">Tổng hợp thông tin</h3>
                    <div id="sub_home" className="text-center ">
                        <div className="container mg-top-20">
                            <div className="row">
                                {this.state.pageOfItems.map((item,index) =>
                                    <RentalCard key={index} rental={item} />
                                )}
                            </div>
                            <Pagination items={this.props.rentals} onChangePage={this.onChangePage} />
                        </div>
                    </div>
                </div>
        );
    // }
    // else return <Loading/>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        rentals: state.rentals.data,
    }
}
export default connect(mapStateToProps)(List);