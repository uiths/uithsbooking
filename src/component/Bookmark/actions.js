import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import {orderByDesc,orderByAsc} from 'helpers'
import {ADD_BOOKMARK_SUCCESS} from 'actions/types'

const axiosInstance = axiosService.getInstance();

const addBookmarkSuccess = (data) => {
    return {
        type : ADD_BOOKMARK_SUCCESS,
        data
    }
}
export const addBookmark = (rentalId) => {
    return dispatch => {
        axiosInstance.post('/users/addBookmark',{rentalId})
        .then( res => {
            dispatch(addBookmarkSuccess(res.data))
        })
        .catch(({response}) =>{
            console.log(response)
        })
    }
}
export const removeBookmark = (rentalId) => {
    console.log(rentalId)
    return dispatch => {
        axiosInstance.post('/users/removeBookmark',{rentalId})
        .then( res => {
            console.log(res.data)
            dispatch(addBookmarkSuccess(res.data))
        })
        .catch(({response})=>{
            console.log(response)
        })
    }
}
export const getBookmark = () => {
    return dispatch => {
        axiosInstance.get('/users/getBookmark')
        .then(res =>{
            console.log(res.data)
            dispatch(addBookmarkSuccess(res.data))
        })
        .catch(({response}) =>{
            console.log(response)
        })
    }
}