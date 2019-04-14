import React from 'react';

export function UserContent(props) {
    console.log(props)
    return (
        <div className="usercontent">
            <div className="row">
                <div className="col-lg-6">
                    <br />
                    <label>Username</label>
                    <input value={props.user.username} type="text" className="form-control" placeholder="Nhập tên" id="name" name="name" />
                </div>
                <div className="col-lg-6">
                    <br />
                    <label>Tên</label>
                    <input value={props.user.fullname} type="text" className="form-control" placeholder="Nhập Họ Tên" id="name" name="name" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <br />
                    <label>Email</label>
                    <input value={props.user.email} type="text" className="form-control" placeholder="Nhập email" id="email" name="email" />
                </div>
                <div className="col-lg-4">
                    <br />
                    <label>Số điện thoại</label>
                    <input type="text" className="form-control" placeholder="Nhập số điện thoại" id="phone" name="phone" />
                </div>
                <div className="col-lg-2">
                    <br />
                    <label>Giới tính</label>
                    <select className="form-control">
                        <option selected disabled hidden>Giới tính</option>
                        <option value="1d">Nam</option>
                        <option value="1d">Nữ</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <br />
                    <label>Địa chỉ</label>
                    <input type="text" className="form-control" placeholder="Nhập địa chỉ" id="address" name="address" />
                    <br />
                    <label>Số nhà đã đặt</label>
                    <p style={{ marginLeft: "20px" }}>20 Nhà</p>
                    <br />
                    <label>Số nhà đã đăng</label>
                    <p style={{ marginLeft: "20px" }}>20 Nhà</p>
                </div>
                <div className="col-lg-6">
                    <br />
                    <label>Mô tả bản thân</label>
                    <textarea type="text" className="form-control" rows="8" style={{ resize: "none" }} placeholder="Mô tả một ít về bản thân bạn" id="about" name="about" />
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <div className="col-lg-4">
                </div>
                <div className="col-lg-4">
                    <button type="submit" className="b b1 center_button">Lưu thay đổi</button>
                </div>
                <div className="col-lg-4">
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}

export default UserContent;

