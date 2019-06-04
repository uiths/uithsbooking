import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();

const FETCH_TOP_RENTALS_SUCCESS = "FETCH_TOP_RENTALS_SUCCESS"

const fetchTopRentalsSuccess = (data) => {
    return {
        type: FETCH_TOP_RENTALS_SUCCESS,
        data
    }
}
export const  fetchTopRentals = () =>{
    return dispatch => {
        dispatch(showLoading())
        axiosInstance.get("/rentals/search/top")
        .then(res =>{
            dispatch(hideLoading())
            dispatch(fetchTopRentalsSuccess(res.data))
        })
        .catch(({response}) => {
            if (response.status === 500)
                toast.error(response.data);
            else toast.error(response.data.errors.detail)
            dispatch(hideLoading());
        })
    }
}