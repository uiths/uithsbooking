import React, { Component } from 'react';
import * as actions from 'actions'
import RentalCard from 'component/RentalCard'
import { connect } from 'react-redux'
import Pagination from './Pagination';
import { sortBy, resetBookState } from './actions'
import "./style.scss"

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageOfItems: []
        };
    }
    componentDidMount() {
        this.props.resetBookState();
        if (this.props.rentals.length === 0)
            this.props.fetchRentals();
    }
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    sortBy = (e) => {
        this.props.sortBy(this.props.rentals, e.target.value)
    }
    render() {
        return (
            <div className="container list-rentals-container">
                <h3 className="text-left title_h3 type1 animated fadeInLeft mg-top-20">Tổng hợp thông tin</h3>
                <select defaultValue="createdAt" onChange={this.sortBy} className="list-sort-selector">
                    <option value="createdAt">Mới nhất</option>
                    <option value="priceAsc">Giá thấp nhất</option>
                    <option value="price">Giá cao nhất</option>
                    <option value="rating">Rating</option>
                </select>
                <div id="sub_home" className="text-center ">
                    <div className="container mg-top-20">
                        <div className="row">
                            {this.state.pageOfItems.map((item, index) =>
                                <RentalCard key={index} rental={item} />
                            )}
                        </div>
                        <Pagination items={this.props.rentals} onChangePage={this.onChangePage} />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        rentals: state.rentals.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sortBy: (data, sort) => dispatch(sortBy(data, sort)),
        resetBookState: () => dispatch(resetBookState()),
        fetchRentals: () => dispatch(actions.fetchRentals())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);