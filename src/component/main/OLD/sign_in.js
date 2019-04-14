import React, {Component} from 'react';
import Login from './sub/login'
import Signup from './sub/signup'
import fakeAuth from './sub/private_route'
import {Redirect} from 'react-router-dom'

class Sign_in extends Component {

    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };


    render() {

        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer }  = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;



        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#login">Đăng nhập</a></li>
                    <li><a data-toggle="tab" href="#register">Đăng ký</a></li>
                </ul>

                <div className="tab-content">
                    <div id="login" className="tab-pane fade in active">
                        <h3>Đăng nhập</h3>
                        <form>
                        <Login/>
                        </form>
                        <button onClick={this.login} type="submit" className="btn btn-primary" style={{marginLeft: '35%'}}>ĐĂNG NHẬP</button>
                    </div>
                    <div id="register" className="tab-pane fade">
                        <Signup/>
                    </div>
                </div>

            </div>

        );
    }
}

export default Sign_in;