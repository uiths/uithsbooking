import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import BookingManageCard from '../booking/BookingManageCard'
import { connect } from 'react-redux'
import * as actions from 'actions';
class List_book extends Component {
    componentWillMount() {
        // if(!this.props.userBookings.length>0)
        this.props.dispatch(actions.fetchUserBookings());
    }
    renderRental = () => {
        if (this.props.userBookings.length > 0) {
            this.props.userBookings.map((i, index) => {
                return <BookingManageCard  rental={i.rental} key={index} delete={this.delete} />
            })
        }
    }
    bookingDetail =( i ) =>{
        alert(i.startAt)
    }
    compare = ( a, b )=> {
        if ( a.guests < b.guests ){
          return -1;
        }
        if ( a.guests > b.guests ){
          return 1;
        }
        return 0;
      }
      
    render() {
        
        const isSuccess = this.props.isSuccess
        return (
            <div>
                <div className="container">
                <br/>
                    <h4 className="text-left title_h3 type1 animated fadeInLeft">Danh sách nhà mà bạn thuê</h4>
                    <div id="sub_home" className="text-center ">
                        <div className="container mg-top-20">
                        {/* {
                            isSuccess &&
                            <div className="boxtrue">Đã xóa thành công</div>
                        } */}
                            <div className="row">
                                {
                                    this.props.userBookings.length > 0 &&
                                    this.props.userBookings.map((i, index) => {
                                        console.log(i)
                                        return (
                                            <BookingManageCard owner={i.owner} id={i._id} rental={i} key={index} />
                                       )
                                    })
                                }
                                
                                {/* <RentalCard rental={this.props.userBookings.rental}/> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        userBookings: state.userBookings.data,
        isSuccess: state.userBookings.isSuccess
    }
}

export default connect(mapStateToProps)(List_book);