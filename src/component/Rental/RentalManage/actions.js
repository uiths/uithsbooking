import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
const axiosInstance = axiosService.getInstance();

export const FETCH_USER_RENTALS_SUCCESS = 'FETCH_USER_RENTALS_SUCCESS'

const fetchUserRentalsSuccess = (data) => {
    return {
        type: FETCH_USER_RENTALS_SUCCESS,
        data
    }
}
export const fetchUserRentals = () => {
    return dispatch => {
        dispatch(showLoading());
        axiosInstance.get('/rentals/manage')
        .then(res => {
            dispatch(hideLoading())
            dispatch(fetchUserRentalsSuccess(res.data))
        })
        .catch(({response}) => {
            if (response.status === 500)
                toast.error(response.data);
            else toast.error(response.data.errors.detail)
            dispatch(hideLoading());
        })
    }
}
