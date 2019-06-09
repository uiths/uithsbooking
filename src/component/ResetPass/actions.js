import axiosService from 'services/axios-service';
// import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {startSubmit, stopSubmit} from 'redux-form';
import { toast } from "react-toastify";
import {RESET_PASSWORD_SUCCESS} from 'actions/types'
const axiosInstance = axiosService.getInstance();
export const resetSuccess = () => {
	return {
		type: RESET_PASSWORD_SUCCESS
	}
}

export const resetPass = (userData, id) => {
	return (dispatch) => {
		dispatch(startSubmit('forgotForm'))
		return axiosInstance.post(`/users/reset/${id}`, userData)
			.then(() => {
				dispatch(stopSubmit('forgotForm'))
				dispatch(resetSuccess())
				toast.success('Tha đổi mật khẩu thành công')
			})
			.catch(({response}) => {
				dispatch(stopSubmit('forgotForm'))
				toast.error(response.data.detail)
			})
	}
}