import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as actions from 'actions'
const deleteRental = (rentalId) => {
    actions.deleteRental(rentalId)
}
export function RentalManageCard(props) {
    const rental = props.rental;
    return (
        <React.Fragment>
            <div className="sub_home_slider_container col-sm-3">
            {/* <div className="sub_home_slider_container"> */}
                <Link className="sub_home_link"  to={`/detail/${rental._id}`}>
                    <img className="sub_home_fix_img" src={rental.image[0]} alt="Snow" width="100%" />
                    <p className="sub_home_text_p">{rental.address}</p>
                    <h3 className="sub_home_text_h3">{rental.title}</h3>
                    <div className="sub_home_text_price">{rental.price.toLocaleString()} VNĐ</div>
                    <div className="sub_home_star"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></div>
                </Link>
            {/* </div> */}
            </div>
            
            {/*Modal Content*/}
            <div className="modal fade" id={`myListRentModal${rental._id}`} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <input className="form-control"  />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close
                    </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal fade" id={`deleteRentModal${rental._id}`} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Bạn có chắc chắn sẽ xóa</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" style={{float:"left",display:"inline-block"}} onClick={()=>{deleteRental(rental._id)}} className="btn btn-default" data-dismiss="modal">Đồng ý</button>
                            <button type="button" style={{float:"right",display:"inline-block"}} className="btn btn-default" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
export default RentalManageCard;