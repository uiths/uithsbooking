import axiosService from 'services/axios-service';
// import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {startSubmit, stopSubmit} from 'redux-form';
import { toast } from "react-toastify";
import authService from 'services/auth-service';
const axiosInstance = axiosService.getInstance();

export const updatePass = (userData) => {
  userData._id = authService.getId();
  return (dispatch) => {
    dispatch(startSubmit('newPassForm'))
    return axiosInstance.post('/users/change', userData)
      .then(res => {
        dispatch(stopSubmit('newPassForm'))
        toast.success('Đã cập nhật thành công')
      })
      .catch(({ response }) => {
        dispatch(stopSubmit('newPassForm'))
        toast.error(response.data.detail)
      }
      )
  }
}