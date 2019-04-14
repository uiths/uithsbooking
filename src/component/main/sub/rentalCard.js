import React, { Component } from 'react';
import { Link } from "react-router-dom"
class rentalCard extends Component {
    render() {
        return (
            <div className="sub_home_slider_container">
                <Link to="/my_rent"><img src="../img/img_bookhouse/img_list_booking/1.jpg" alt="Snow" width="100%" /></Link>
                <p >Q. Bình Thạnh</p>
                <p >5.000.000VNĐ</p>
            </div>
        );
    }
}

export default rentalCard;