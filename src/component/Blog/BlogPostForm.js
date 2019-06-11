import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { CustomInput } from 'component/Form/CustomInput'
import CustomQill from './CustomQuill'
import PhotoSelector from './BlogPhotoSelector'
import {validate} from './validate'
import {ToastContainer} from 'react-toastify'
class BlogPostForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting, submitCb, valid } = this.props
        return (
            <form onSubmit={handleSubmit(submitCb)}>
                <Field
                    name="title"
                    type="text"
                    label='Tên bài viết'
                    className="custom-input"
                    placeholder="Tên tiêu đề"
                    component={CustomInput}
                />
                <Field
                    className="photo-selector"
                    name="image"
                    component={PhotoSelector}
                />
                <Field
                    name="content"
                    type="text"
                    // label='Password'
                    component={CustomQill}
                />
                <button>Xem trước</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'blogPostForm',
    // validate
})(BlogPostForm)