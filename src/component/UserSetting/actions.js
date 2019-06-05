import {UPLOAD_AVATAR_SUCCESS} from 'actions/types'
import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
const axiosInstance = axiosService.getInstance();
const uploadSuccess = (data) => {
    return {
        type: UPLOAD_AVATAR_SUCCESS,
        data
    }
}
export const uploadAvatar = (file) => {
    return dispatch => {
        const formData = new FormData();
        formData.append('image', file.avatar);
        dispatch(resetUserState())
        dispatch(startSubmit('editAvatarForm'))
        return axiosInstance.post('/users/avatar', formData)
            .then(res => {
                dispatch(uploadSuccess(res.data))
                dispatch(stopSubmit('editAvatarForm'))
                dispatch(reset('editAvatarForm'))

            })
            .catch(({ response }) => {
                dispatch(stopSubmit('editAvatarForm'))
                Promise.reject(response.data.errors)
            })
    }
}
