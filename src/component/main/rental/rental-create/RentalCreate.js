import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import RentalCreateForm from './RentalCreateForm';
import { Redirect } from 'react-router-dom';
import * as actions from 'actions';
import { connect } from 'react-redux'
import { startSubmit, stopSubmit } from 'redux-form';
import { fromJS } from 'immutable'
import user from '../../user/user';
import './style.scss'
import toJS from 'immutable'
import { base64toBlob } from 'helpers/index';

// import {rentalCreateForm} from './RentalCreateForm'
class Create_rent extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            redirect: false,
            images: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(userData) {
        const images = []
        const data = {}
        for (var key in userData) {
            if (key != 'image')
                Object.assign(data, { [key]: userData[key] });

        }
        console.log(userData.image)
        // userData.image.map(i => {
        //     if (i.get('thumbSmall')) {
        //         const base64 = (i.get('thumbSmall').split(','))[1]
        //         images.push(base64toBlob(base64, 'image/png'));
        //     }
        // })
        // this.setState({ images }, () => {
        //     this.props.dispatch(startSubmit('rentalCreateForm'))
        //     actions.createRental(data, this.state.images)
        //         .then(
        //             (rental) => {
        //                 this.props.dispatch(stopSubmit('rentalCreateForm'))
        //                 this.setState({ redirect: true })
        //             },
        //             (errors) => {
        //                 this.props.dispatch(stopSubmit('rentalCreateForm'))
        //                 this.setState({ errors })
        //             })
        // })



    }
    render() {
        const { isLoad, isLoading } = this.state;
        if (this.state.redirect) {
            return <Redirect to={{ pathname: '/rental/manage', state: { posted: true } }} />
        }
        return (
            <div>
                <div className="container">
                    <div id="create-rent" className=" text-left ">
                        <h3 className="title_h3 type1 animated fadeInLeft">Cho thuê nhà</h3>
                        <br />
                        <div className="container fea-container">
                            <div className="infobox">
                                <RentalCreateForm submitCb={this.handleClick} />
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
}
export default connect(mapStateToProps)(Create_rent);