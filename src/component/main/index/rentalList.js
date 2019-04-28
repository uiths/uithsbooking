import React, { Component } from 'react';
import RentalCard from './rentalCard'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";

import * as actions from '../../../actions';
import Loading from '../user/loading';

class RentalList extends Component {

    componentWillMount() {
        if(this.props.rentals.length === 0)
        this.props.dispatch(actions.fetchRentals());
    }

    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return (
                <div  key={index} className="sub_home_slider_container ">
                    {/* <div className="sub_home_slider_container"> */}
                    <Link className="sub_home_link"  to={`/detail/${rental._id}`}>
                        <img className="sub_home_fix_img" src={rental.image[0]} alt="Snow" width="100%" />
                        <p className="sub_home_text_p">{rental.address}</p>
                        <h3 className="sub_home_text_h3">{rental.title}</h3>
                        <div className="sub_home_text_price">{rental.price}</div>
                        <div className="sub_home_star"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></div>
                    </Link>
                    {/* </div> */}
                </div>
            //     <RentalCard key={index} rental={rental}/>
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
        console.log(this.props)
        if(this.props.rentals && this.props.rentals.length > 0){
        return (
            <div id="sub_home" className="container">
                <h2 style={{color: "black"}} className="text-center">THUÊ NHÀ</h2>
                <div className="text-center headdingGray"><sup className="spainGray pd-right-20">________________</sup><sup className="spainGray pd-left-20">________________</sup></div>

                <div className="sub_home_object">
                    <h4 style={{marginBottom:"20px",fontSize:"40px",padding:"10px"}} className="text-left title_h3 type1 animated fadeInLeft">Gợi ý  </h4>
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
    else return <Loading/>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        rentals: state.rentals.data,
        fetch : state.rental
    }
}
export default connect(mapStateToProps)(RentalList);