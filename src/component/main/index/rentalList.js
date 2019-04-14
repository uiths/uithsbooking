import React, { Component } from 'react';
import RentalCard from './rentalCard'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {connect} from "react-redux";

import * as actions from '../../../actions';

class RentalList extends Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchRentals());
    }

    renderRentals() {
        return this.props.rentals.map((rental, index) =>{
            return (
                <RentalCard key={index} rental={rental}/>
            )
        })
    }
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 1
        };
        return (
            <div id="sub_home" className="container animated slideInUp delay-1s slower">
                <h2 className="text-center">THUÊ NHÀ</h2>
                <div className="text-center headdingGray"><sup className="spainGray pd-right-20">________________</sup><i className="fa fa-heart-o" /><sup className="spainGray pd-left-20">________________</sup></div>

                <div className="sub_home_object">

                    <h4 className="text-left title_h3 type1 animated fadeInLeft">Gợi ý</h4>
                    <div className="sub_home_slider text-center">
                        <Slider {...settings}>
                            {this.renderRentals()}
                        </Slider>
                    </div>
                    <Link to="/booking_home" className="f-right title_h3 type2 animated fadeInLeft">Xem thêm ></Link>
                </div>
            </div>


        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        rentals: state.rentals.data
    }
}
export default connect(mapStateToProps)(RentalList);