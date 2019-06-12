import React from 'react';
import { Link } from "react-router-dom";
import { formatNumber } from 'helpers/index'
export function RentalCard(props) {
    const rental = props.rental;
    return (
            <div className="sub_home_slider_container sub_home_slider_container_list_rent">
                <Link to={`/detail/${rental._id}`}><img src={rental.image[0]} alt="Snow" width="100%" /></Link>
                {/* <img className="sub_home_fix_img" src={rental.image[0]} alt="Snow" width="100%" /> */}
                <p className="sub_home_text_p text-truncate">{rental.address}</p>
                <h3 className="sub_home_text_h3 text-truncate">{rental.title}</h3>
                <div className="sub_home_text_price">{formatNumber(rental.price)} đồng/ngày</div>
                <div className="sub_home_star"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                {/* </div> */}
            </div>
    )
}
export default RentalCard;
