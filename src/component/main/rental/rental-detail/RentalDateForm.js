import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmResError } from 'component/main/shared/form/BwmResError';
import { DateInput } from 'component/main/shared/form/DateInput'
import Datepicker from 'component/Form/DatePicker'
import CustomSelect from 'component/Form/CustomSelect'
import { BwmSelect } from 'component/main/shared/form/BwmSelect'
// import { bookValidate } from 'component/main/shared/form/validators'
import {validate} from './validate'
import { addDays } from 'date-fns'
const RentalDateForm = props => {
    const options = ['1', '2', '3', '4', '5', '6', '8', '9', '10','11','12','13','14','15','16','17','18','19','20']
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    console.log(pristine)
    return (
        <React.Fragment>
            <BwmResError errors={errors} />
            <form onSubmit={handleSubmit(submitCb)} autoComplete='off'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="start-date">
                            <Field
                                name="startAt"
                                label='Ngày đến'
                                className="custom-input"
                                placeholder="dd/mm/yy"
                                component={Datepicker}
                                minDate={addDays(new Date, 1)}
                            // validate={[required]}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="end-date">
                            <Field
                                name="endAt"
                                label='Ngày đi'
                                placeholder="dd/mm/yy"
                                className="custom-input"
                                component={Datepicker}
                                minDate={addDays(new Date, 2)}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="people-select">
                    <Field
                        name="guests"
                        label='Số người'
                        className="custom-input"
                        component={CustomSelect}
                    >
                        {[(<option disabled key='null'></option>)].concat(options.map((item) => {
                            return <option value={item} key={item}>{item}</option>;
                        }))}
                    </Field>
                </div>
                <button type="submit" className="b b1 center_button" disabled={!valid || pristine || submitting}>
                    {submitting ?
                        <span>
                            <i className="fa fa-spin fa-spinner" /> Đang đặt phòng...
                        </span>
                        :
                        <span>Đặt phòng</span>
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
    form: 'rentalDateForm',
    validate
})(RentalDateForm)
