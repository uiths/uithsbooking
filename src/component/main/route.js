import React, {Component} from 'react';
import { Route, Redirect } from "react-router-dom";
import Register from "component/Register/Register"
import Login from "component/Login/Login"
import Home from "../index/Loadable";
import User from "./user/user";
import User2 from "./user/user2";
import User1 from "component/UserSetting/Loadable"

// import Blogmain from "component/Blog/BlogList"
// import BlogDetail from "component/Blog/BlogDetail/BlogDetail"

// import Contactmain from "component/Contact/ContactPage"
import Contactmain from "./contact/contact_main";
import Paymentmain from "./payment/payment_main";

import Loading from "component/main/user/loading"
import RentalDetail from "./rental/rental-detail/RentalDetail";
import BookingHome from "component/BookingHome";
import BookingDetail from "component/main/booking/BookingDetail";
import BookingHistory from "component/BookingHistory/Loadable"
import RegisterConfirm from "component/RegisterConfirm"
import Search from "component/Search"
// import CreateRent from "./user/create_rent"
import CreateRent from './rental/rental-create/RentalCreate'
import {ProtectedRoute} from './shared/auth/ProtectedRoute'
import {LoggedInRoute} from './shared/auth/LoggedInRoute'
import ForgotPassword from "./user/forgot_password";
// import ChangeNewPass from "component/ChangeNewPass";
import RentalEdit from 'component/RentalEdit'
import ResetPass from 'component/ResetPass'
import BlogPost from 'component/Blog/BlogPost'
import BlogReview from 'component/Blog/BlogReview'
import Blog from 'component/Blog'
import BlogDetail from 'component/Blog/BlogDetail'
// import EditProfile from 'component/EditProfile'
import RentalManage from 'component/Rental/RentalManage'
import Bookmark from 'component/Bookmark'
import CustomerBookings from 'component/CustomerBookings'
import {ToastContainer} from 'react-toastify'

class Routerr extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <ProtectedRoute path="/user" component={User1} />
                <ProtectedRoute path="/user1" component={User1} />
                <ProtectedRoute path="/edit/:id" component={RentalEdit}/>
                <Route path="/user2" component={User2} />
                <Route path="/confirm/:id" component={RegisterConfirm}/>
                <Route path="/search" component={Search} />
                <Route path="/loading" component={Loading} />                
                <ProtectedRoute path="/create_rent" component={CreateRent} />
                <ProtectedRoute path="/history" component={BookingHistory}/>
                <LoggedInRoute path="/forgot_pass" component={ForgotPassword} />
                {/* <LoggedInRoute path="/new_pass_f" component={change_pass} /> */}
                {/* <ProtectedRoute path="/new_pass" component={ChangeNewPass} /> */}
                <Route exact path='/reset/:id' component={ResetPass}/>
                <LoggedInRoute path="/login" component={Login} />
                <LoggedInRoute path="/register" component={Register} />
                <ProtectedRoute path="/booking/:id" component={BookingDetail}/>
                <Route path="/detail/:id" component={RentalDetail} />
                <Route path="/booking_home" component={BookingHome} />
                <ProtectedRoute exact path="/rental/manage" component={RentalManage} />
                {/* <Route path="/editMyProfile" boocomponent={EditProfile}/> */}
                {/*<PrivateRoute  path="/slot" component={Slot} />*/}
                {/* <Route path="/blog" component={Blogmain} /> */}
                <Route path="/blogDetail" component={BlogDetail} />
                <Route path="/contact" component={Contactmain} />
                <ProtectedRoute  path="/payment" component={Paymentmain} />
                
                <ProtectedRoute path="/blog_post" component={BlogPost}/>
                <ProtectedRoute path="/blog_review" component={BlogReview}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/blog_detail/:id' component={BlogDetail}/>
                <ProtectedRoute path='/customer_booking' component={CustomerBookings}/>
                <ProtectedRoute path="/bookmark" component={Bookmark}/>
                <ToastContainer />

            </div>
        );
    }
}






export default Routerr;