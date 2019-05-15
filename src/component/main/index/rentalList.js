import React, { Component } from 'react';
import RentalCard from './rentalCard'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";

import * as actions from '../../../actions';
import Loading from '../user/loading';

function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            style={{...style, display: 'block', zIndex:3 ,  padding: 25}}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            style={{...style, display: 'block', zIndex:3, padding: 25}}
            onClick={onClick}
        ></div>
    );
}

class RentalList extends Component {

    componentWillMount() {
        if(this.props.rentals.length === 0)
        this.props.dispatch(actions.fetchRentals());
    }

    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return (
                <div  key={index} className="sub_home_slider_container col-sm-3">
                    {/* <div className="sub_home_slider_container"> */}
                    <Link className="sub_home_link"  to={`/detail/${rental._id}`}>
                        <img className="sub_home_fix_img" src={rental.image[0]} alt="Snow" width="100%" />
                        <p className="sub_home_text_p">{rental.address}</p>
                        <h3 className="sub_home_text_h3">{rental.title}</h3>
                        <div className="sub_home_text_price">{rental.price.toLocaleString()}</div>
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
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        if(this.props.rentals && this.props.rentals.length > 0){
        return (
            <div id="sub_home" className="container-fluid">
                <div className="sub_home_list mg-top-40">
                    <h4  className="text-left title_h3 animated fadeInLeft">Gợi ý tốt nhất</h4>
                    <div className="sub_home_slider text-center">
                        <Slider {...settings}>
                            {this.renderRentals()}
                        </Slider>
                    </div>
                    <Link to="/booking_home" className="f-right title_link animated fadeInLeft">Xem thêm ></Link>
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