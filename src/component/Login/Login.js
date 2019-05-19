import React, { Component } from 'react';
import {Redirect } from 'react-router-dom'
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            errors: []
        }
    }
    loginUser = (userData) => {
        this.props.dispatch(actions.login(userData))
    }
    render() {
        const { isAuth } = this.props.auth;
        if (isAuth) {
            return <Redirect to={{ pathname: '/' }} />
        }
        return (
            <div>
                <ToastContainer autoClose={2000} />
                <div className="bg">
                    <img src="/img/bg.jpg" alt="bg" />
                </div>
                <div className="fg">
                    <div className="container">
                        <br />
                        <br />
                        <br />
                        <div className="dbox slide-in-bottom">
                            <h3 style={{ textAlign: "center" }}>Đăng nhập</h3>
                            <br />
                            <LoginForm submitCb={this.loginUser}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Login);