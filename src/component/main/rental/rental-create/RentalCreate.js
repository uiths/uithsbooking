import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import RentalCreateForm from './RentalCreateForm';
import { Redirect } from 'react-router-dom';
import * as actions from 'actions';
import { connect } from 'react-redux'
import { startSubmit, stopSubmit } from 'redux-form';
import './style.scss'
import { base64toBlob } from 'helpers/index';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {rentalCreateForm} from './RentalCreateForm'
class Create_rent extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            redirect: false,
            images: []
        }
    }

    handleClick = (rentalData) => {
        const image = []
        const change = rentalData.image.map(i => {
            if (i !== null)
                image.push(i)
        })
        Promise.all(change).then(() => {
            Object.assign(rentalData, { image: image })
            this.props.dispatch(actions.createRental(rentalData))
            .then(res =>{  res && res[0] &&  toast.error(res[0].detail)})
        }
        )

    }
    
    render() {

        if(this.props.rental.isCreated){
            return <Redirect to={{ pathname: `/detail/${this.props.rental.data._id}`, state: { posted: true } }} />
        }
        // if(this.props.rental.errors){
        //     console.log(this.props.rental.errors)
        // }
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
                                <ToastContainer autoClose={2000} />

                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.rental.errors,
        rental: state.rental
    }
}
export default connect(mapStateToProps)(Create_rent);