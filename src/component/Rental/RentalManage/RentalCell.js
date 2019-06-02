import React, { Component } from 'react';
import {formatDate} from 'helpers'
class RentalCell extends Component {
    render() {
        const rental = this.props.rental || {}
        return (
            <div className="rental-cell-container">
                <div className="rental-cell-image">
                    <img src={rental.image && rental.image[0]}></img>
                </div>
                <div className="rental-detail">
                    <div className="rental-title">
                        {rental.title && rental.title}
                    </div>
                    <div className="rental-time">
                        {rental.address && rental.address}
                    </div>
                </div>
                <div className={`rental-total-price` }>
                    {rental.price && (<p>{rental.price.toLocaleString()+" đồng"}</p>)}
                </div>
            </div>
        );
    }
}

export default RentalCell;