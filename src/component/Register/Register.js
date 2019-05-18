import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux'
import * as actions from 'actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Signup extends Component {
    constructor() {
        super();
    }
    registerUser = (userData) => {
        this.props.dispatch(actions.register(userData))
    }
    render() {
        return (
            <div>
                <ToastContainer autoClose={3500}/>
                <div className="bg">
                    <img src="/img/bg.jpg" alt="bg"/>
                </div>
                <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <div  className="dbox slide-in-bottom">
                            <h3 style={{textAlign:"center"}}>Đăng ký</h3>
                            <hr/>
                            <div>
                    <RegisterForm submitCb={this.registerUser}/>
                    </div></div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(Signup);