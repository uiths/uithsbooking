import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { BwmInput } from 'component/main/shared/form/BwmInput'
import { validate } from 'component/main/shared/form/validators'
import { Link } from "react-router-dom"
import Captcha from 'component/Captcha'

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submitCb)}>
        <Field
          name="email"
          type="email"
          label='Email'
          className="field__input a-field__input"
          id='email'
          component={BwmInput}
        />
        <br />
        <br />
        <Field
          name="password"
          type="password"
          label='Password'
          className="field__input a-field__input"
          component={BwmInput}
        />
        <div className="checkbox checkb">
          <label><input type="checkbox" name="remember" /> Nhớ tên tài khoản</label>
          <Link to="/forgot_pass" className="btn btn-link"
          >Quên mật khẩu?</Link>
        </div>
        <br />
        <Captcha/>
        <button type="submit" className="b b1 center_button" disabled={!valid || pristine || submitting}>
        {submitting ?
          <span>
            <i className="fa fa-spin fa-spinner"/> Đang đăng nhập...
          </span>
          :
          <span>Đăng nhập</span>
        }
      </button>
        {}
        <br />
        <br />
      </form>
    </React.Fragment>
  )
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)
