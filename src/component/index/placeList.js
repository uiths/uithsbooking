import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";
import * as actions from 'actions';
import { fetchTopRentals } from './actions'
import PlaceItem from "./placeItem"

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', zIndex: 3, padding: 25 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', zIndex: 3, padding: 25  }}
            onClick={onClick}
        />
    );
}

class PLaceList extends Component {

    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 2000,
            slidesToShow: 6,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div id="sub_home02" className="container-fluid mg-top-40">
                <h4 className="text-left title_h3 animated fadeInLeft">Điểm đến hàng đầu</h4>
                <div className="sub_home02_list">
                        <Slider {...settings}>

                            <PlaceItem search="search?key=ha noi" title="Hà Nội" img="../img/img_home/index_region/Ha_noi.png" />

                            <PlaceItem search="search?key=da lat" title="Đà Lạt" img="../img/img_home/index_region/Da_lat.png" />

                            <PlaceItem search="search?key=nha trang" title="Nha Trang" img="../img/img_home/index_region/Nha_trang.png" />

                            <PlaceItem search="search?key=ho chi minh" title="TP.Hồ Chí Minh" img="../img/img_home/index_region/TPHCM.png" />

                            <PlaceItem search="search?key=hoa binh" title="Hòa Bình" img="../img/img_home/index_region/Hoa_Binh.png" />

                            <PlaceItem search="search?key=ha long" title="Hạ Long" img="../img/img_home/index_region/Ha_long.png" />

                            <PlaceItem search="search?key=da nang" title="Đà Nẵng" img="../img/img_home/index_region/Da_Nang.png" />

                            <PlaceItem search="search?key=vung tau" title="Vũng Tàu" img="../img/img_home/index_region/Vung_tau.png" />

                        </Slider>
                </div>
                    {/*<Link to="/booking_home" className="f-right title_link animated fadeInLeft">Xem thêm ></Link>*/}
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
export default connect(mapStateToProps, mapDispatchToProps)(PLaceList);