import { CREATE_RENTAL_SUCCESS} from 'actions/types'
import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();
const createRentalSuccess = (data) => {
    return {
        type: CREATE_RENTAL_SUCCESS,
        data
    }
}
export const createRental = (rentalData) => {
    return dispatch => {
        dispatch(showLoading())
        axiosInstance.post('/rentals/create', rentalData)
            .then((res) => {
                dispatch(hideLoading());
                dispatch(createRentalSuccess(res.data))
                toast.success('Tạo thành công. Hãy đợi kiểm duyệt')
            })
            .catch(({ response }) => {
                if (response.status === 500)
                    toast.error(response.data);
                else toast.error(response.data.errors.detail)
                dispatch(hideLoading());
            })
    }
}