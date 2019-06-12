import React from 'react';
import { Link } from "react-router-dom";
// import TextTruncate from 'react-text-truncate';
import './_style.scss';

export function RentalCard(props) {
    const rental = props.rental || [];
    return (
        <div className="sub_home_slider_container">
            <Link className="sub_home_link" to={`/detail/${rental._id}`}>
                <img className="sub_home_fix_img" src={rental.image[0]} alt="HomeIMG" width="100%" />
               {/* <p className="sub_home_text_p" ><TextTruncate*/}
               {/*     line={1}*/}
               {/*     truncateText="…"*/}
               {/*     text={rental.address}*/}
               {/* /></p>*/}
               {/*<h3 className="sub_home_text_h3" ><TextTruncate*/}
               {/*     line={1}*/}
               {/*     truncateText="…"*/}
               {/*     text={rental.title}*/}
               {/*/></h3>*/}
                <p className="sub_home_text_p text-truncate">{rental.address}</p>
                <h3 className="sub_home_text_h3 text-truncate">{rental.title}</h3>
                <div className="sub_home_text_price">{rental.price.toLocaleString()} VNĐ</div>
                <div className="sub_home_star"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
            </Link>
        </div>
    )
}
export default RentalCard;