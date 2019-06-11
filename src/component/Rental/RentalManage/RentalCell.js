import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RentalCell extends Component {
    render() {
        const rental = this.props.rental || {}
        return (
            <div className="rental-cell-container">
                <div className="rental-cell-image">
                    <img alt="rental-img" src={rental.image && rental.image[0]}></img>
                </div>
                <div className="rental-detail">
                    <div className="rental-title">
                        {rental.title && rental.title}
                    </div>
                    <div className="rental-time">
                        {rental.address && rental.address+', '}{rental.status && rental.status}
                    </div>
                </div>
                <div className={`rental-total-price`}>
                    {rental.price && (<p>{rental.price.toLocaleString() + " đồng"}</p>)}
                    {rental.rating >=0 && <StarRatingComponent
                        name="rating"
                        starCount={5}
                        value={rental.rating}
                    />}
                </div>
            </div>
        );
    }
}

export default RentalCell;