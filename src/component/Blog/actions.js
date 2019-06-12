import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import authService from 'services/auth-service';

export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const GET_BLOG_BY_ID_SUCCESS = 'GET_BLOG_BY_ID_SUCCESS';

const getBlogSuccess = (data)=> {
    return {
        type: GET_BLOG_SUCCESS,
        data
    }
}
const getBlogByIdSuccess = (data) => {
    return {
        type: GET_BLOG_BY_ID_SUCCESS,
        data
    }
}
const axiosInstance = axiosService.getInstance();

export const createBlog = (data) => {
    return dispatch => {
        axiosInstance.post('/blog/post', data)
        .then(res => toast.success(res.data.detail))
        .catch(({response}) => console.log(response))
    }
}

export const getBlog = () => {
    return dispatch => {
        axiosInstance.get('/blog/get')
        .then(res => {
            dispatch(getBlogSuccess(res.data))    
        })
        .catch(({response}) => {
            console.log(response)
        })
    }
}

export const getBlogById = (blogId) => {
    return dispatch => {
        axiosInstance.post('/blog/getBlogById', {blogId: blogId})
        .then(res => {
            dispatch(getBlogByIdSuccess(res.data))
        })
        .catch(({response})=>{
            console.log(response)
        })
    }
}