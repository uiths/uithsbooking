import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import authService from 'services/auth-service';
import { UPDATE_RENTAL_SUCCESS } from 'actions/types'

const axiosInstance = axiosService.getInstance();
const editRentalSuccess = (data) => {
    return {
        type: UPDATE_RENTAL_SUCCESS,
        data
    }
}
export const editRental = (rentalData, id) => {
    return dispatch => {
        axiosInstance.post(`/rentals/update/${id}`, rentalData)
            .then(res => {
                dispatch(editRentalSuccess(res.data))
            })
            .catch(({ response }) => {
                if (response.status === 500)
                    toast.error(response.data);
                else toast.error(response.data.errors.detail);
                dispatch(hideLoading());
            })
    }
}