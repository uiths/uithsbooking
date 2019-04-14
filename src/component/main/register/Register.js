import React, { Component } from 'react';

import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';

import * as actions from 'actions';

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            errors: [],
            redirect: false
        }

        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(userData) {
        actions.register(userData).then(
            registered => this.setState({ redirect: true }),
            errors => this.setState({ errors })
        );
    }
    render() {
        const { errors, redirect } = this.state;

        if (redirect) {
            return <Redirect to={{ pathname: '/login', state: { successRegister: true } }} />
        }
        return (
            <div>
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
                    <RegisterForm submitCb={this.registerUser} errors={errors} />
                    </div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;