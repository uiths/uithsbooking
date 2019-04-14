import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import Slider from "react-slick";
import rentalCard from "./rentalCard"
class Sub_home extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed:2000,
            slidesToShow: 5,
            slidesToScroll: 1
        };

        return (
            <div>
                <div id="sub_home" className="container animated slideInUp delay-1s slower">
                    <h2 className="text-center">THUÊ NHÀ</h2>
                    <div className="text-center headdingGray"><sup className="spainGray pd-right-20">________________</sup><i className="fa fa-heart-o" /><sup className="spainGray pd-left-20">________________</sup></div>

                    <div className="sub_home_object">
                    <h4  className="text-left title_h3 type1 animated fadeInLeft">Gợi ý</h4>
                    <div className="sub_home_slider text-center">
                    <Slider {...settings}>
                    <rentalCard/>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/1.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Bình Thạnh</p>
                            <p >5.000.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/2.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Bình Tân</p>
                            <p >3.000.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/3.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Bình Thạnh</p>
                            <p >2.000.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/4.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Thủ Đức</p>
                            <p >1.800.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/5.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Mười hai</p>
                            <p >2.200.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/6.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Hai</p>
                            <p >5.500.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/7.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Một</p>
                            <p >6.200.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/8.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Ba</p>
                            <p >6.800.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/9.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Bốn</p>
                            <p >7.999.000VNĐ</p>
                        </div>
                        <div className="sub_home_slider_container">
                            <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/10.jpg" alt="Snow" width="100%"/></Link>
                            <p >Q. Thủ Đức</p>
                            <p >3.200.000VNĐ</p>
                        </div>
                    </Slider>
                    </div>
                        <Link to="/booking_home" className="f-right title_h3 type2 animated fadeInLeft">Xem thêm ></Link>
                    </div>




































                    {/*<div id="fea-slide" className="carousel slide" data-ride="carousel">*/}
                        {/*<div className="carousel-inner fea-full-content" role="listbox">*/}
                            {/*<div className="item active">*/}
                                {/*<div className="container fea-container">*/}
                                    {/*<div className="row">*/}
                                        {/*<div className="col-sm-3 fea-img">*/}
                                            {/*<img src="../img/img_bookhouse/house1.jpg" width="100%"/>*/}
                                            {/*<div className="fea-fade">*/}
                                                {/*<div className="fea-fade-text">*/}
                                                    {/*<p className="text-center">*/}
                                                        {/*<Link className="fea-fade-button" to="/my_rent">Chi tiết</Link>*/}
                                                    {/*</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="fea-img-text-bottom">*/}
                                                {/*<p>Nhà 6</p>*/}
                                                {/*<p>Biển Đông</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}


                        {/*/!*Left and right controls*!/*/}

                        {/*<a className="left carousel-control fea-fix-carousel" href="#fea-slide" role="button"*/}
                           {/*data-slide="prev">*/}
                            {/*<span className="fa fa-hand-o-left fea-fix-potision-icon" aria-hidden="true"/>*/}
                            {/*<span className="sr-only">Previous</span>*/}
                        {/*</a>*/}
                        {/*<a className="right carousel-control fea-fix-carousel" href="#fea-slide" role="button"*/}
                           {/*data-slide="next">*/}
                            {/*<span className="fa fa-hand-o-right fea-fix-potision-icon" aria-hidden="true"/>*/}
                            {/*<span className="sr-only">Next</span>*/}
                        {/*</a>*/}

                        {/*<ol className="carousel-indicators fea-dot">*/}
                            {/*<li data-target="#fea-slide" data-slide-to="0" className="active"/>*/}
                            {/*<li data-target="#fea-slide" data-slide-to="1"/>*/}
                            {/*<li data-target="#fea-slide" data-slide-to="2"/>*/}
                        {/*</ol>*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/*movie*/}
                {/*<div className="modal fade" id="myModal" role="dialog">*/}
                    {/*<Movie_01/>*/}
                {/*</div>*/}
                </div>
            </div>

    );
    }
}

export default Sub_home;