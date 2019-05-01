import React, { Component } from 'react';
import 'react-image-picker/dist/index.css'
import PhotoSelector from 'component/PhotoSelector'
import { Field, reduxForm } from 'redux-form';
import './style.scss'
import { validate2 } from './validate'
class UserAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFiles: [],
            imgSrc: '',
            isUpLoading: false,
            isSuccess: false,
        }
    }

    render() {
        const { valid, pristine, submitting, handleSubmit, submitCb } = this.props
        const imageList = this.props.initialValues.oldImages
        return (

            <div className="col-md-6 col-lg-6 col-xs-12">
                <form onSubmit={handleSubmit(submitCb)}>
                    <Field
                        className="photo-selector"
                        name="avatar"
                        image={this.props.initialValues.image}
                        component={PhotoSelector}
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
            </div>
        );
    }
}

export default reduxForm({
    form: 'editAvatarForm',
    // destroyOnUnmount: true,
    // enableReinitialize: true,
    validate: validate2
})(UserAvatar);