import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();
const FETCH_USER_BOOKINGS_SUCCESS = "FETCH_USER_BOOKINGS_SUCCESS"
const fetchUserBookingsSuccess = (userBookings) => {
    return {
        type: FETCH_USER_BOOKINGS_SUCCESS,
        userBookings
    }
}

export const fetchUserBookings = () => {
    return dispatch => {
        dispatch(showLoading());
        axiosInstance.get('/bookings/manage')
            .then(res => res.data)
            .then(userBookings => {
                dispatch(hideLoading());
                dispatch(fetchUserBookingsSuccess(userBookings))
            })
            .catch(({ response }) => {
                dispatch(hideLoading());
                if (response.status === 500)
                    toast.error(response.data);
                else toast.error(response.data.errors.detail)
            })
    }
}