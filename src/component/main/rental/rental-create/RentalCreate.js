import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import RentalCreateForm from './RentalCreateForm';
import { Redirect } from 'react-router-dom';
import * as actions from 'actions';
import { connect } from 'react-redux'
import { startSubmit, stopSubmit } from 'redux-form';
import './style.scss'
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

    handleClick(rentalData) {
        const image = []
        console.log(rentalData)
        const change = rentalData.image.map(i => {
            if (i !== null)
                image.push(i)
        })
        Promise.all(change).then(() => {
            Object.assign(rentalData, { image: image })
            console.log(rentalData)
            this.props.dispatch(actions.createRental(rentalData))
        }
    )}
    render() {
                const { isLoad, isLoading } = this.state;
                if(this.state.redirect) {
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