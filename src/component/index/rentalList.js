import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";
import * as actions from 'actions';
import { fetchTopRentals } from './actions'
import StarRatingComponent from 'react-star-rating-component';
import TextTruncate from "react-text-truncate";

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', zIndex: 3, padding: 25, top:'30%'}}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', zIndex: 3, padding: 25, top:'30%' }}
            onClick={onClick}
        ></div>
    );
}

class RentalList extends Component {
    componentDidMount() {
        if (this.props.rentals.length === 0)
            this.props.fetchTopRentals()
    }
    renderRentals() {
        const rentals = this.props.rentals || []
        return rentals.map((rental, index) => {
            return (
                <div key={index} className="sub_home_slider_container col-sm-3">
                    <Link className="sub_home_link" to={rental._id ? `/detail/${rental._id}` : '/'}>
                        <img className="sub_home_fix_img" src={rental.image && rental.image[0]} alt="Snow" width="100%" />
                        <p className="sub_home_text_p" ><TextTruncate
                            line={1}
                            truncateText="…"
                            text={rental.address && rental.address}
                        /></p>
                        <h3 className="sub_home_text_h3" ><TextTruncate
                            line={1}
                            truncateText="…"
                            text={rental.title && rental.title}
                        /></h3>
                        {/*<p className="sub_home_text_p">{rental.address && rental.address}</p>*/}
                        {/*<h3 className="sub_home_text_h3">{rental.title && rental.title}</h3>*/}
                        <div className="sub_home_text_price">{rental.price && rental.price.toLocaleString()} VNĐ</div>
                        <StarRatingComponent
                            name="rating"
                            starCount={5}
                            value={rental.rating}
                        />
                        {/* <div className="sub_home_star"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div> */}
                    </Link>
                </div>
            )
        })
    }
    render() {
        const settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true,
                        autoplay: true,
                        infinite: true,
                        autoplaySpeed: 3000,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        dots: false,
                        autoplay: true,
                        infinite: true,
                        autoplaySpeed: 3000,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        autoplay: true,
                        infinite: true,
                        autoplaySpeed: 3000,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                }
            ]
        };
        return (
            <div id="sub_home" className="container-fluid">
                <div style={{ minHeight: "400px" }} className="sub_home_list mg-top-40">
                    <h4 className="text-left title_h3 animated fadeInLeft">Gợi ý tốt nhất</h4>
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
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRentals: () => dispatch(actions.fetchRentals()),
        fetchTopRentals: () => dispatch(fetchTopRentals())
    }
}
const mapStateToProps = (state) => {
    return {
        rentals: state.rentals.topRentals,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RentalList);