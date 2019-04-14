import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from 'component/main/shared/form/BwmInput';
import { BwmResError } from 'component/main/shared/form/BwmResError';
import { required, minLength4 } from 'component/main/shared/form/validators';

const ForgotForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <div className="form-group">

                <Field
                    name="email"
                    type="email"
                    label='Email'
                    className='field__input a-field__input'
                    id='email'
                    component={BwmInput}
                    validate={[required, minLength4]}
                /></div>

            <button className='b b1 center_button' type="submit" disabled={!valid || pristine || submitting}>
                Gửi
        </button>
            {}
            <br/>
            <br/>
            <BwmResError errors={errors} />
        </form>
    )
}

export default reduxForm({
    form: 'forgotForm'
})(ForgotForm)
