import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import * as actions from 'actions'
import { connect } from 'react-redux';
import AuthService from 'services/auth-service'
import authService from '../../services/auth-service';
import LoadingBar from 'component/Loading/CustomLoadingBar';
import './style.scss'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            key: null
        }
    }
    handleLogout = () => {
        this.props.logout();
        this.props.history.push('/');
    }
    renderAuthButton(isAuth) {
        if (isAuth) {
            return
        }
        return (
            <React.Fragment>
                <div style={{ paddingTop: "5px" }}>
                    <Link className="na-sign-in" to="/login"><i className="fa fa-user" /> ĐĂNG NHẬP</Link>
                    <span >/</span>
                    <Link className="na-sign-in" to="/register"> <i className="fa fa-key" /> ĐĂNG KÝ</Link>
                </div>
            </React.Fragment>
        )
    }
    renderOwnerSection(isAuth) {
        if (isAuth) {
            return (
                <li className="dropdown">
                </li>
            )
        }
    }
    render() {
        const { username, isAuth } = this.props.auth;
        const image = authService.getImage() || ''
        return (
            <Fragment>
                <LoadingBar className="loading-bars"></LoadingBar>
                <header >
                    <div className="">
                        <nav className="navbar na">
                            <div className="container-fluid">
                                <div className="row">
                                    <Link className="na-brand col-sm-2" to="/"><img src="/img/index_icon_range.png" width="50%" alt={"none"}/></Link>
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle na-toggle" data-toggle="collapse" data-target="#myNavbar">
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse na-right col-sm-6" id="myNavbar">
                                        <ul className="nav navbar-nav ">
                                            <li><Link className="na-item " to="/booking_home">ĐẶT NHÀ</Link></li>

                                            {/* <li><Link className="na-item" to="/">BLOG CHIA SẺ</Link></li> */}
                                            {/*{this.renderOwnerSection(isAuth)}*/}
                                            {/* <li><Link className="na-item" to="/contact">LIÊN HỆ</Link></li> */}
                                        </ul>
                                    </div>

                                    <div className="navbar-right col-sm-2 mg-top-10">
                                        {isAuth &&
                                            <span className="dropdown"><img className="navbar-right-img" alt="avatar" src={image} />
                                                <a className="na-item dropdown-toggle" data-toggle="dropdown" href="#"> {username}<span className="caret" /></a>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="/user">TRANG CÁ NHÂN</Link></li>
                                                    <li><Link to="/history">DANH SÁCH NHÀ ĐẴ ĐẶT</Link></li>
                                                    <li><Link to="/rental/manage">DANH SÁCH NHÀ CHO THUÊ</Link></li>
                                                    <li><Link to="/create_rent">CHO THUÊ NHÀ</Link></li>
                                                    <hr />
                                                    <li> <button onClick={this.handleLogout}> ĐĂNG XUẤT</button></li>
                                                </ul>
                                            </span>
                                        }
                                        {this.renderAuthButton(isAuth)}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
    }
}
export default withRouter(connect(mapStateToProps)(Header));