import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Đăng ký</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Tên:</label>
                                <input id="fname" type="text" className="form-control" placeholder="Tên *" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" placeholder="Email *" />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control" placeholder="Password *" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthDate">Ngày sinh*</label>
                                <input type="date" id="birthDate" className="form-control" />
                            </div>
                            <label>Giới tính</label>
                            <div className="form-group">
                                <input type="radio" name="gender" />
                                <span> Nam </span>
                                <input type="radio" name="gender" />
                                <span> Nữ </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Họ:</label>
                                <input id="lname" type="text" className="form-control" placeholder="Họ *" />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input id="name" type="text" className="form-control" placeholder="Username *" />
                            </div>
                            <div className="form-group">
                                <label>Xác nhận Password:</label>
                                <input type="password" className="form-control" placeholder="Xác nhận Password *" />
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại:</label>
                                <input type="phoneNumber" className="form-control" placeholder="Số điện thoại *" />
                            </div>
                            <span className="help-block">Phần có dấu * Là những phần bắt buộc điền</span>
                            Qua việc click <strong className="label label-primary">Đăng ký</strong>, bạn đã đồng ý với <a href="#" data-toggle="modal" data-target="#t_and_c_m">Điều khoản dịch vụ</a> của chúng tôi, bao gồm cả việc sử dụng Cookie.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Đăng ký</button>
                </div>

            </div>
        );
    }
}

export default Signup;