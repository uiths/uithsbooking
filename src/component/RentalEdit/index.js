import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import RentalCreateForm from 'component/main/rental/rental-create/RentalCreateForm';
import { Redirect } from 'react-router-dom';
import * as actions from 'actions';
import { connect } from 'react-redux'
import { startSubmit, stopSubmit } from 'redux-form';
import './style.scss'

// import {rentalCreateForm} from './RentalCreateForm'
class RentalEdit extends Component {
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
        
        actions.editRental(userData,this.props.location.state.rental._id);
        // const images = []
        // const data = {}
        // for (var key in userData) {
        //     if (key != 'image')
        //         Object.assign(data, { [key]: userData[key] });

        // }
        // console.log(userData.image)
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
        const rental = this.props.location.state.rental;
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
                                <RentalCreateForm initialValues={rental} submitCb={this.handleClick} />
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
        rental : state.rental
    }
}
export default connect(mapStateToProps)(RentalEdit);