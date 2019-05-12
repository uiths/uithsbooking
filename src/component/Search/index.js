import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import NormalRentalCard from './NormalRentalCard'
import { Link } from "react-router-dom";
import * as actions from 'actions'
import {handleString} from 'helpers/index'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rentals: []
        }
    }
    renderRentals() {
        return this.state.rentals.map((rental, index) => {
            return (
                <NormalRentalCard key={index} rental={rental} />
            )
        })
    }
    componentWillMount() {
        console.log(this.props)
        window.scrollTo(0, 0)
        if (this.props.rentals.data.length === 0)
            this.props.dispatch(actions.fetchRentals());
        else {
            const params = new URLSearchParams(this.props.location.search);
            const key = handleString(params.get('key'));
            console.log(key)
            const result = this.props.rentals.data.filter(i =>
                handleString(i.title).includes(key) ||
                handleString(i.city).includes(key) ||
                handleString(i.address).includes(key)
            )
            Promise.all(result).then(this.setState({rentals:result}))
        }
    }
    componentWillReceiveProps(nextProps) {
        const params = new URLSearchParams(nextProps.location.search);
        const key = params.get('key');
        const result = nextProps.rentals.data.filter(i =>
            handleString(i.title).includes(key) ||
            handleString(i.city).includes(key) ||
            handleString(i.address).includes(key)
        )
        Promise.all(result).then(this.setState({rentals:result}))
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h3 className="text-left title_h3 type1 animated fadeInLeft">Kết quả tìm kiếm</h3>
                    <div id="sub_home" className="text-center ">
                        <div className="container mg-top-20">
                            <div className="row">
                                {this.renderRentals()}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        rentals: state.rentals
    }
}
export default connect(mapStateToProps)(Search);