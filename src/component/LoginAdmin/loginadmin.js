import React, {Component} from 'react';
import {Link,Redirect} from  'react-router-dom'

class Loginadmin extends Component {
    render() {
        return (
            <div className="bg1">
                <div className="fg">
                    <div className="container">
                        <br/>
                        <br/>
                        <br/>
                        <div className="dbox slide-in-bottom">
                            <h3>Đăng nhập</h3>
                            <br/>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="Nhập email" name="email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd"
                                           placeholder="Nhập password" name="pwd"/>
                                </div>
                                <div className="checkbox checkb">
                                    <label><input type="checkbox" name="remember" /> Nhớ tên tài khoản</label>
                                    <Link to="/forgot_pass"  className="btn btn-link"
                                    >Quên mật khẩu?</Link>
                                </div>
                            </form>
                            <br/>
                            <button onClick={this.login} type="submit" className="btn btn-primary center_button">Đăng nhập</button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Loginadmin;