import React, {Component} from 'react';
import {  BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class List_rent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h4  className="text-left title_h3 type1 animated fadeInLeft">Danh sách nhà mà bạn cho thuê</h4>
                    <div id="sub_home" className="text-center ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="sub_home_slider_container">
                                        <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/8.jpg" alt="Snow" width="100%"/></Link>
                                        <p >Q. Bình Thạnh</p>
                                        <p >5.000.000VNĐ</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="sub_home_slider_container">
                                        <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/26.jpg" alt="Snow" width="100%"/></Link>
                                        <p >Q. Bình Tân</p>
                                        <p >3.000.000VNĐ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default List_rent;