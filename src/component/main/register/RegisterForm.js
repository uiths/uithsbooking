import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from 'component/main/shared/form/BwmInput';
import { BwmResError } from 'component/main/shared/form/BwmResError';
import { required, minLength6 } from 'component/main/shared/form/validators';

const RegisterForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="email"
                type="email"
                label='Email'
                className="field__input a-field__input"
                component={BwmInput}
                validate={[required]}

            />
            <br />
            <Field
                name="username"
                type="text"
                label='Username'
                className="field__input a-field__input"
                component={BwmInput}
                validate={[required, minLength6]}
            />
            <br />
            <Field
                name="password"
                type="password"
                label='Password'
                className="field__input a-field__input"
                component={BwmInput}
                validate={[required, minLength6]}
            />
            <br />

            <Field
                name="passwordConfirmation"
                type="password"
                label='Password Confirmation'
                className="field__input a-field__input"
                component={BwmInput}
                validate={[required, minLength6]}
            />
            <br />
            <div className="text-center">
                <p>Qua việc click <strong className="label label-primary">Đăng ký</strong>, bạn đã đồng ý với <a href="#" data-toggle="modal" data-target="#t_and_c_m">Điều khoản dịch vụ</a> của chúng tôi, bao gồm cả việc sử dụng Cookie.</p>
            </div>
            <br />
            <br />
            <button className="b b1 center_button" type="submit" disabled={!valid || pristine || submitting}>
                Register
        </button>
            {/* {errors.length > 0 &&
                <div className='alert alert-danger bwm-res-errors'>
                    {errors.map((error, index) => <p key={index}> {error.detail} </p>)}
                </div>} */}
                <br/>
                <br/>
            <BwmResError errors={errors} />
        </form>
    )
}

const validate = values => {
    const errors = {};

    if (values.username && values.username.length < 4) {
        errors.username = 'Username min length is 4 characters!';
    }

    if (!values.email) {
        errors.email = 'Please enter email!';
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Please enter password confirmation!';
    }

    if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = 'Passwords must be the same';
    }

    return errors;
}

export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm)

