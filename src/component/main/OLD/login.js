import React, {Component} from 'react';
import {Link,Redirect} from  'react-router-dom'
import fakeAuth from "../sub/private_route";
class Login extends Component {



    render() {


        return (
            <div>

                    <div className="form-group" style={{marginLeft:'35%'}}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" style={{width:'40%'}}
                               placeholder="Nhập email" name="email" />
                    </div>
                    <div className="form-group" style={{marginLeft: '35%'}}>
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" style={{width: '40%'}}
                               placeholder="Nhập password" name="pwd" />
                    </div>
                    <div className="checkbox" style={{marginLeft: '35%'}}>
                        <label><input type="checkbox" name="remember" /> Nhớ tên tài khoản</label>
                        <Link to="/forgot_pass"  className="btn btn-link" style={{marginLeft: '5%'}}
                           >Quên mật khẩu?</Link>
                    </div>




            </div>
        );
    }
}

export default Login;