import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import RentalCreateForm from 'component/main/rental/rental-create/RentalCreateForm';
import { Redirect } from 'react-router-dom';
import * as actions from 'actions';
import { connect } from 'react-redux'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import './style.scss'

// import {rentalCreateForm} from './RentalCreateForm'
class RentalEdit extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            redirect: false,
            images: [],
            rental: {}
        }
        this.notificationDOMRef = React.createRef();

    }
    handleClick = (rentalData) => {
        console.log(rentalData);
        console.log(this.props.rental)
        if (rentalData != this.props.rental) {
            const image = []
            const change = rentalData.image.map(i => {
                if (i !== null)
                    image.push(i)
            })
            Promise.all(change).then(() => {
                Object.assign(rentalData, { image: image })
                this.props.dispatch(actions.editRental(rentalData, this.props.location.state.rental._id));
            })
        }
    }
    componentWillMount() {
        window.scrollTo(0, 0)
        if (this.props.location.state)
            this.state.rental = this.props.location.state.rental;
    }
    addNotification = (message, type) => {
        this.notificationDOMRef.current.addNotification({
            message,
            type,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 4000 },
            dismissable: { click: true }
        });
    }
    // componentDidUpdate() {
    //     if (this.props.rental.isUpdated) {
    //         const id = this.props.location.pathname.split('/edit/')[1]
    //         return <Redirect to={{ pathname: `/detail/${id}` }} />
    //     }
    // }
    render() {
        if (!this.props.location.state || this.props.rental.isUpdated) {
            const id = this.props.location.pathname.split('/edit/')[1]
            return <Redirect to={{ pathname: `/detail/${id}`, state: { editted: true } }} />
        }
        const rental = this.state.rental
        if (this.state.redirect) {
            return <Redirect to={{ pathname: '/rental/manage', state: { posted: true } }} />
        }
        return (
            <div>
                <div className="container">
                    <ReactNotification ref={this.notificationDOMRef} />
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
const mapStateToProps = (state) => {
    return {
        rental: state.rental
    }
}
export default connect(mapStateToProps)(RentalEdit);