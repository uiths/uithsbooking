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
            <div className="col-sm-3">
                <div className="sub_home_slider_container sub_home_slider_container_list_rent">
                    <Link to={`/detail/${rental._id}`}><img src={rental.image[0]} alt="Snow" width="100%" /></Link>
                    <div className="middle">

                        <a href="#" data-toggle="modal" data-target={`#myListRentModal${rental._id}`} title=""><i
                            className="fa fa-edit" aria-hidden="true" /></a>
                        <a href="#" data-toggle="modal" data-target={`#deleteRentModal${rental._id}`} title=""><i
                            className="fa fa-close" aria-hidden="true" /></a>
                    </div>
                    <p><b>{rental.title}</b>
                        <br />
                        {rental.price}                  </p>
                </div>
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
                            <input class="form-control" value={rental.title} />
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