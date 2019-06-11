import React, {Component} from 'react';
import { Route, Redirect } from "react-router-dom";
import Register from "component/Register/Register"
import Login from "component/Login/Login"
import Home from "../index/Loadable";
import User from "./user/user";
import User2 from "./user/user2";
import User1 from "component/UserSetting/Loadable"

import Blogmain from "component/Blog/BlogList"
import BlogDetail from "component/Blog/BlogDetail/BlogDetail"

import Contactmain from "component/Contact/ContactPage"
// import Contactmain from "./contact/contact_main";
import Paymentmain from "./payment/payment_main";

import Loading from "component/main/user/loading"
import RentalDetail from "./rental/rental-detail/RentalDetail";
import BookingHome from "./booking/list";
import BookingDetail from "component/main/booking/BookingDetail";
import BookingHistory from "component/BookingHistory/Loadable"
import MyListBook from "./booking/list_book";
import RegisterConfirm from "component/RegisterConfirm"
import Search from "component/Search"
// import CreateRent from "./user/create_rent"
import CreateRent from './rental/rental-create/RentalCreate'
import {ProtectedRoute} from './shared/auth/ProtectedRoute'
import {LoggedInRoute} from './shared/auth/LoggedInRoute'
import ForgotPassword from "./user/forgot_password";
import change_new_pass from "./user/change_new_password";
import RentalEdit from 'component/RentalEdit'
import ResetPass from './user/reset_pass'
// import EditProfile from 'component/EditProfile'
import RentalManage from 'component/Rental/RentalManage'
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
                <ProtectedRoute path="/new_pass" component={change_new_pass} />
                <Route exact path='/reset/:id' component={ResetPass}/>
                <LoggedInRoute path="/login" component={Login} />
                <LoggedInRoute path="/register" component={Register} />
                <ProtectedRoute path="/booking/:id" component={BookingDetail}/>
                <Route path="/detail/:id" component={RentalDetail} />
                <Route path="/booking_home" component={BookingHome} />
                <ProtectedRoute exact path="/rental/manage" component={RentalManage} />
                <ProtectedRoute path="/list_book" component={MyListBook} />
                {/* <Route path="/editMyProfile" component={EditProfile}/> */}
                {/*<PrivateRoute  path="/slot" component={Slot} />*/}
                <Route path="/blog" component={Blogmain} />
                <Route path="/blogDetail" component={BlogDetail} />
                <Route path="/contact" component={Contactmain} />
                <ProtectedRoute  path="/payment" component={Paymentmain} />
            </div>
        );
    }
}






export default Routerr;