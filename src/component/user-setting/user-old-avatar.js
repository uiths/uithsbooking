import React, { Component } from 'react';
import { connect } from 'react-redux';
import Imagepicker from 'component/Form/ImagePicker'
import { Field, reduxForm } from 'redux-form';

class UserOldAvatar extends Component {
    render() {
        const { submitting, pristine, handleSubmit, submitCb, valid } = this.props
        return (
            <div className="col-md-6 col-lg-6 col-xs-12">
                {this.props.imageList.length > 0 &&
                    <React.Fragment>
                        <form onSubmit={handleSubmit(submitCb)} >
                            <Field
                                name="oldAvatar"
                                imageList={this.props.imageList}
                                component={Imagepicker}
                            />
                            <button type="submit" className="b b1 center_button" disabled={!valid || submitting}>
                                {submitting ?
                                    <span>
                                        <i className="fa fa-spin fa-spinner" /> Đang lưu...
                                        </span>
                                    :
                                    <span>Lưu</span>
                                }
                            </button>
                        </form>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default reduxForm({
    form: 'oldAvatarForm'
})(UserOldAvatar);