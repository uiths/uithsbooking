import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from 'component/main/shared/form/BwmInput';
import { BwmSelect } from 'component/main/shared/form/BwmSelect';
import { BwmTextArea } from 'component/main/shared/form/BwmTextArea';
import { BwmFileUpload } from 'component/main/shared/form/BwmFileUpload';
import { BwmResError } from 'component/main/shared/form/BwmResError';
// import { required, minLength4 } from 'components/shared/form/validators';

const RentalCreateForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, options, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="title"
                type="text"
                label='Tiêu đề'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="city"
                type="text"
                label='Thành phố'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="address"
                type="text"
                label='Địa chỉ'
                className='form-control'
                component={BwmInput}
            />
            <Field
                options={options}
                name="category"
                label='Loại hình'
                className='form-control'
                component={BwmSelect}
            />
            <Field
                name="bedrooms"
                type="number"
                label='Phòng ngủ'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="bathrooms"
                type="number"
                label='Phòng tắm'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="people"
                type="number"
                label='Số người tối đa'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="description"
                type="text"
                label='Mô tả'
                rows='6'
                className='form-control'
                component={BwmTextArea}
            />
            
            <Field
                name="image"
                label='Image'
                component={BwmFileUpload}
            />
            <Field
                name="image1"
                label='Image'
                component={BwmFileUpload}
            />
            
            <Field
                name="price"
                type="text"
                label='Daily Rate'
                className='form-control'
                symbol='$'
                component={BwmInput}
            />
            <Field
                name="isConditioner"
                type="checkbox"
                label='Điều hòa'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="isWifi"
                type="checkbox"
                label='Wifi'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="isStair"
                type="checkbox"
                label='Cầu thang'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="isFridge"
                type="checkbox"
                label='Tủ lạnh'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="isWashing"
                type="checkbox"
                label='Máy giặt'
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="isTv"
                type="checkbox"
                label='Ti Vi'
                className='form-control'
                component={BwmInput}
            />
            <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
                Create Rental
      </button>
            <BwmResError errors={errors} />
        </form>
    )
}

export default reduxForm({
    form: 'rentalCreateForm',
    initialValues: { shared: false, category: 'apartment' }
})(RentalCreateForm)
