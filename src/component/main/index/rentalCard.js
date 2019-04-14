import React, { Component } from 'react';
import { Link } from "react-router-dom";

export function RentalCard(props) {
    const rental = props.rental;

    return (
        <div className="col-sm-3">
            <div className="sub_home_slider_container">
                <Link to={`/detail/${rental._id}`}>
                <img src={rental.image[0]} alt="Snow" width="100%" /></Link>
                <p ><b>{rental.title}</b>
                <br/>
                {rental.price}</p>
            </div>
        </div>
    )
}
export default RentalCard;