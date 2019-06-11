import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import * as actions from 'actions'
import { connect } from 'react-redux';
import AuthService from 'services/auth-service'
import authService from '../../services/auth-service';
import LoadingBar from 'component/Loading/CustomLoadingBar';
import Search from 'component/main/search'
import './style.scss'
import _ from "lodash";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            key: null,
            slideWidth: '0'
        }
    }
    openNav = () => {
        this.setState({
            slideWidth : '100%'
        })
    }
    closeNav = () => {
        this.setState({
            slideWidth : '0'
        })
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
                <div className="na-auth-btn" style={{ paddingTop: "5px" }}>
                    <Link className="na-sign-in" to="/login"><i className="fa fa-user" /> ĐĂNG NHẬP</Link>
                    <span >/</span>
                    <Link  className="na-sign-in" to="/register"> <i className="fa fa-key" /> ĐĂNG KÝ</Link>
                </div>
            </React.Fragment>
        )
    }

    renderAuthButtonSideNav(isAuth) {
        if (isAuth) {
            return
        }
        return (
            <React.Fragment>
                <div className="na-auth-btn-sidenav">
                    <Link onClick={this.closeNav} className="" to="/login"><i className="fa fa-user" /> ĐĂNG NHẬP</Link>
                    <span >/</span>
                    <Link onClick={this.closeNav} className="" to="/register"> <i className="fa fa-key" /> ĐĂNG KÝ</Link>
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
        const data = [
            //     {
            //     title: "Gợi ý rentals",
            //     array: this.props.rentals.data || []
            // },
            {
                title: "Lịch sử tìm kiếm",
                array: this.props.users.data.searchHistory || []
            }]
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
                                    <Link className="na-brand f-left " to="/"><img src="/img/index_icon_range.png" width="100%" alt={"header"}/></Link>


                                    <div className="collapse navbar-collapse na-right f-left mg-left-2per" id="myNavbar">
                                        <ul className="nav navbar-nav ">
                                            <li> </li>
                                            <li className="active" ><Link className="na-item " to="/booking_home">ĐẶT NHÀ</Link></li>
                                             <li><Link className="na-item" to="/blog">BLOG CHIA SẺ</Link></li>

                                             <li><Link className="na-item" to="/contact">LIÊN HỆ</Link></li>
                                            {/*{this.renderOwnerSection(isAuth)}*/}

                                        </ul>
                                    </div>

                                    <div className="na-search">
                                    <Search data={data} />
                                    </div>

                                    <div className="navbar-header f-right">
                                        <button onClick={this.openNav} type="button" className="btn navbar-toggle na-toggle">
                                            <span className="fa fa-bars" />
                                        </button>
                                    </div>

                                    <div className="navbar-right mg-top-10">
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

                                    <div id="mySidenav" className="sidenav" style={{width: this.state.slideWidth}}>
                                        <button className="btn btn-danger closebtn"
                                           onClick={this.closeNav}>&times;</button>
                                        <Link onClick={this.closeNav} className="sidenav-item " to="/booking_home">ĐẶT NHÀ</Link>
                                        <Link onClick={this.closeNav} className="sidenav-item" to="/blog">BLOG CHIA SẺ</Link>

                                        <Link onClick={this.closeNav} className="sidenav-item" to="/contact">LIÊN HỆ</Link>
                                        <hr />

                                        {this.renderAuthButtonSideNav(isAuth)}

                                        <div className="sidenav-search">
                                        <Search data={data} />
                                        </div>
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
        rentals: state.rentals,
        users : state.users
    }
}
export default withRouter(connect(mapStateToProps)(Header));