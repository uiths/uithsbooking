import React, {Component} from 'react';

class ForgotPassword extends Component {
    render() {
        return (
            <div className="container">
                <div className="modal-header">
                    <h4 className="modal-title">Quên mật khẩu</h4>
                </div>
                <div className="modal-body">
                    <p>Nhập email để chúng tôi có thể gửi thư xác nhận và giúp bạn khôi phục lại mật
                        khẩu</p>

                    <div className="form-group" style={{marginLeft: '10%'}}>
                        <label htmlFor="email">Nhập lại email:</label>
                        <input type="email" className="form-control" id="email" style={{width: '90%'}}
                               placeholder="Nhập email" name="email" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"><a href="change_pwd.html"
                                                                         style={{color: 'white'}}>Gửi</a>
                    </button>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;