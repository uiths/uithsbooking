import React, { Fragment, Component } from 'react';
import './style.scss'
import PhotoSelector from 'component/PhotoSelector'
import CustomSelect from 'component/Form/CustomSelect';
import CustomTextArea from 'component/Form/CustomTextArea';
import {CustomInput} from 'component/Form/CustomInput'
import DatePicker from 'component/Form/DatePicker'
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap'
class EditProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {valid, pristine, submitting, handleSubmit, submitCb} = this.props
        const user = this.props.user;
        console.log(this.props)
        return (
            <Fragment>
                {/* <div className="edit-profile-container">
                    <p className="edit-profile-label">Chỉnh sửa thông tin cá nhân</p> */}
                    <div className="edit-profile-form">
                        <form onSubmit={handleSubmit(submitCb)}>
                            <div className="edit-profile-fields">
                                {/* <div className="row">
                                    <div className="col-md-3 col-lg-3 col-xs-12">
                                        <div className="field-container">
                                        <Field
                                            name="avatar"
                                            component={PhotoSelector} />
                                        </div>

                                    </div>
                                    <div className="col-md-9 col-lg-9 col-xs-12">
                                        <div className="speech-bubble">
                                            <Field
                                                className="custom-textarea"
                                                maxLength={2000}
                                                placeholder="Giới thiệu bản thân"
                                                component={CustomTextArea}
                                            />
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 col-xs-12">
                                        <div className="field-container">
                                            <Field
                                                label="Email"
                                                type="text"
                                                name="email"
                                                component={CustomInput}
                                                className="custom-input" />
                                        </div>
                                        <div className="field-container">
                                            <Field
                                                label="Họ và tên"
                                                type="text"
                                                name="fullname"
                                                component={CustomInput}
                                                className="custom-input" />

                                        </div>
                                        <div className="field-container">
                                            <Field
                                                label="Ngày sinh"
                                                component={DatePicker}
                                                name="dateOfBirth"
                                                selected = {new Date(this.props.initialValues.dateOfBirth)}
                                                className="custom-input"
                                            />
                                        </div>
                                        <div className="field-container">
                                            <Field
                                                label="Địa chỉ"
                                                name="address"
                                                component={CustomInput}
                                                className="custom-input"
                                            />
                                        </div>
                                        <div className="field-container">
                                            <Field
                                                label="Giới thiệu bản thân"
                                                name="description"
                                                component={CustomTextArea}
                                                className="custom-textarea"
                                                maxLength={120}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xs-12">
                                        <div className="field-container">
                                            <Field
                                            component={CustomInput}
                                            name="username"
                                            label="Tên người dùng" 
                                            type="text" 
                                            className="custom-input" />
                                        </div>
                                        <div className="field-container">
                                            <Field
                                                label="Số điện thoại"
                                                name="phone"
                                                component={CustomInput}
                                                className="custom-input"
                                            />
                                        </div>
                                        <div className="field-container">
                                            <Field
                                                label="Giới tính"
                                                name="gender"
                                                component={CustomSelect}
                                                className="custom-input">
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                            </Field>
                                        </div>
                                        <div className="field-container">
                                            <Field
                                                label="Số chứng minh thư"
                                                name="identityCard"
                                                maxLength={120}
                                                component={CustomInput}
                                                className="custom-input"
                                            />
                                        </div>
                                        <div className="field-container">
                                            <Field
                                                label="Đôi lời nhắn nhủ"
                                                name="message"
                                                maxLength={120}
                                                component={CustomTextArea}
                                                className="custom-textarea"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="b b1 center_button" disabled={!valid  || submitting}>
                                    {submitting ?
                                        <span>
                                            <i className="fa fa-spin fa-spinner" /> Đang lưu...
                                        </span>
                                        :
                                        <span>Lưu</span>
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                {/* </div> */}
            </Fragment>
        );
    }
}

export default reduxForm({
    form: 'editProfileForm',
    // destroyOnUnmount: true,
    enableReinitialize: true,
    // validate
})(EditProfile);