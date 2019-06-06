import authService from 'services/auth-service';
import axiosService from 'services/axios-service';
import { startSubmit, stopSubmit } from 'redux-form';
import { reset } from 'redux-form';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

import {
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTALS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILURE,
  FETCH_USER_BY_ID_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPLOAD_AVATAR_SUCCESS,
  FETCH_USER_BOOKINGS_SUCCESS,
  CREATE_BOOKING_SUCCESS,
  RESET_BOOKING_STATE,
  UPDATE_RENTAL_SUCCESS,
  UPDATE_RENTAL_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  RESET_RENTAL_ERRORS,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILURE,
  RESET_USER_STATE,
  DELETE_RENTAL_SUCCESS,
  RESET_RENTAL_STATE,
  FETCH_BOOKING_BY_ID_SUCCESS,

  SORT_BOOKING
} from './types';

const axiosInstance = axiosService.getInstance();

export const verifyRentalOwner = (rentalId) => {
  return axiosInstance.get(`/rentals/${rentalId}/verify-user`);
}

// RENTALS ATIONS ---------------------------

const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  }
}

const fetchRentalByIdSuccess = (rental) => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  }
}

const fetchRentalsSuccess = (rentals) => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    rentals
  }
}

export const fetchRentals = (city) => {
  const url = city ? `/rentals?city=${city}` : '/rentals';
  return dispatch => {
    dispatch(showLoading())
    axiosInstance.get(url)
      .then(res => res.data)
      .then(rentals => {
        dispatch(hideLoading())
        dispatch(fetchRentalsSuccess(rentals))
      })
      .catch(( response ) => {
        if (response.status === 500)
          toast.error(response.data);
        else toast.error(response.data.errors.detail)
        dispatch(hideLoading());
      })
  }
}

export const fetchRentalById = (rentalId) => {
  return function (dispatch) {
    dispatch(showLoading())
    dispatch(fetchRentalByIdInit());

    axiosInstance.get(`/rentals/${rentalId}`)
      .then(res => res.data)
      .then(rental => {
        dispatch(hideLoading())
        dispatch(fetchRentalByIdSuccess(rental))
      }
      );
  }
}

export const resetRentalsState = () => {
  return {
    type: RESET_RENTAL_ERRORS
  }
}

export const resetRentalState = () => {
  return {
    type: RESET_RENTAL_STATE
  }
}

// USER BOOKINGS ACTIONS ---------------------------
export const sortBooking = (data) => {
  return {
    type: SORT_BOOKING,
    data
  }
}

export const createPayment = (data) => {
  return dispatch => {
    dispatch(showLoading());
    axiosInstance.post("/payments/create", data)
      .then(res => {
        dispatch(hideLoading())
        toast.success("Thanh toán thành công")
        dispatch(fetchBookingByIdSuccess(res.data));
      })
      .catch(({ response }) => {
        dispatch(hideLoading());
        if (response.status === 500)
          toast.error(response.data);
        else toast.error(response.data.errors.detail)
      })
  }
}
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
const deleteBookingSuccess = (data) => {
  return {
    type: DELETE_BOOKING_SUCCESS,
    data
  }
}
const deleteBookingFailure = (errors) => {
  return {
    type: DELETE_BOOKING_FAILURE,
    errors
  }
}
export const deleteBooking = (bookingId) => {
  return dispatch => {
    axiosInstance.delete(`bookings/${bookingId}`)
      .then(res => { dispatch(deleteBookingSuccess(res.data)) })
      .catch(({ response }) => {
        console.log(({ response }))
        dispatch(deleteBookingFailure(response.data.errors))
      })
  }
}
const resetBooking = () => {
  return { type: RESET_BOOKING_STATE }
}
export const resetBookState = () => {
  return dispatch => {
    dispatch(resetBooking())
  }
}


// USER RENTALS ACTIONS ---------------------------

export const getUserRentals = () => {
  return axiosInstance.get('/rentals/manage').then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}
const deleteRentalSuccess = (data) => {
  return {
    type: DELETE_RENTAL_SUCCESS,
    data
  }
}
export const deleteRental = (rentalId) => {
  return dispatch => {
    dispatch(showLoading());
    return axiosInstance.delete(`/rentals/${rentalId}`)
      .then(res => {
        dispatch(hideLoading())
        toast.success("Xóa thành công")
        dispatch(deleteRentalSuccess(res.data))})
        .catch(({response}) => {
          if (response.status === 500)
              toast.error(response.data);
          else toast.error(response.data.errors.detail)
          dispatch(hideLoading());
      })
  }
}

// AUTH ACTIONS ---------------------------

const loginSuccess = () => {
  const username = authService.getUsername();
  return {
    type: LOGIN_SUCCESS,
    username
  }
}

export const checkAuthState = () => {
  return dispatch => {
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}

export const fetchUserById = (userId) => {
  return dispatch => {
    dispatch(showLoading());
    axiosInstance.get(`/users/info/${userId}`)
      .then(res => {
        dispatch(hideLoading());
        dispatch(fetchUserByIdSuccess(res.data))
      })
      .catch(( {response} ) => {
        if (response.status === 500)
          toast.error(response.data);
        else toast.error(response.data.errors.detail);
        dispatch(hideLoading());
        dispatch(stopSubmit('loginForm'))
      })
  }
}

const fetchUserByIdSuccess = (user) => {
  return {
    type: FETCH_USER_BY_ID_SUCCESS,
    user
  }
}

export const logout = () => {
  authService.invalidateUser();

  return {
    type: LOGOUT
  }
}
const sendMailFailure = (errors) => {
  return {
    type: SEND_MAIL_FAILURE,
    errors
  }
}

const sendMailSuccess = () => {
  return {
    type: SEND_MAIL_SUCCESS
  }
}
export const sendMail = (email) => {
  return dispatch => {
    dispatch(startSubmit('forgotForm'))
    return axiosInstance.post('/users/forgotpass', email)
      .then(response => {
        dispatch(sendMailSuccess())
        dispatch(stopSubmit('forgotForm'))
      })
      .catch(({ response }) => {
        dispatch(sendMailFailure(response.data.errors))
        dispatch(stopSubmit('forgotForm'))
      })


  }
}
export const confirmAccount = (id) => {
  return axiosInstance.get(`/users/confirm/${id}`)
    .then(res => toast.success("Xác thực tài khoản thành công. Hãy đăng nhập ngay"))
    .catch(({ response }) => {
      if (response.status === 500)
        toast.error(response.data);
      else toast.error(response.data.errors.detail)
    })
}
export const resetSuccess = () => {
  return {
    type: RESET_PASSWORD_SUCCESS
  }
}

export const resetFailure = (errors) => {
  return {
    type: RESET_PASSWORD_FAILURE,
    errors
  }
}

export const resetPass = (userData, id) => {
  return (dispatch) => {
    return axiosInstance.post(`/users/reset/${id}`, userData)
      .then(res => {
        dispatch(resetSuccess())
      })
      .catch(response => {
        dispatch(resetFailure(response.data.errors))
      })
  }
}

const updatePassSuccess = () => {
  return {
    type: UPDATE_PASSWORD_SUCCESS
  }
}
const updatePassFailure = (errors) => {
  return {
    type: UPDATE_PASSWORD_FAILURE,
    errors
  }
}
const updateUserSuccess = (data) => {
  return {
    type: UPDATE_USER_SUCCESS,
    data
  }
}
const updateUserFailure = (errors) => {
  return {
    type: UPDATE_USER_FAILURE,
    errors
  }
}
export const updateUserInfo = (userData) => {
  return dispatch => {
    dispatch(resetUserState())
    dispatch(startSubmit('editProfileForm'))
    return axiosInstance.post('/users/updateinfo', userData)
      .then(res => {
        dispatch(stopSubmit('editProfileForm'))
        dispatch(updateUserSuccess(res.data))
      })
      .catch(({ response }) => {
        dispatch(stopSubmit('editProfileForm'))
        dispatch(updateUserFailure(response.data.errors))
      })
  }
}
export const addSearchHistory = (key) => {
  return dispatch => {
    return axiosInstance.post("/users/searchHistory", { "key": key })
      .then(res =>
        dispatch(fetchUserByIdSuccess(res.data))
      )
  }
}
export const updatePass = (userData) => {

  userData._id = authService.getId();
  return (dispatch) => {
    dispatch(resetUserState());
    dispatch(startSubmit('newPassForm'))
    return axiosInstance.post('/users/change', userData)
      .then(res => {
        dispatch(stopSubmit('newPassForm'))
        dispatch(updatePassSuccess())
      })
      .catch(errors => {
        console.log(errors)
        dispatch(stopSubmit('newPassForm'))
        dispatch(updatePassFailure(errors.response.data.errors[0]))
      }
      )
  }
}

export const resetUserState = () => {
  return {
    type: RESET_USER_STATE
  }
}
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
        console.log(response)
        // Promise.reject(response.data.errors)
      })
  }
}

export const oldAvatar = (url) => {
  return dispatch => {
    dispatch(resetUserState())
    dispatch(startSubmit('editAvatarForm'))
    return axiosInstance.post('/users/oldAvatar', url)
      .then(res => {
        authService.changeImage(res.data.image)
        dispatch(stopSubmit('editAvatarForm'))
        dispatch(reset('editAvatarForm'))
        dispatch(uploadSuccess(res.data))
        const temp = document.getElementsByClassName('responsive selected')
        temp[0] && temp[0].classList.remove('selected');
        const temp2 = document.getElementsByClassName('thumbnail selected')
        temp2[0] && temp2[0].classList.remove('selected')

      })
      .catch(({ response }) => {
        dispatch(stopSubmit('editAvatarForm'))
        Promise.reject(response.data.errors)
      })
  }
}
const createBookingSuccess = (data) => {
  return {
    type: CREATE_BOOKING_SUCCESS,
    data
  }
}
const fetchBookingByIdSuccess = (data) => {
  return {
    type: FETCH_BOOKING_BY_ID_SUCCESS,
    data
  }
}
export const fetchBookingById = (bookingId) => {
  return dispatch => {
    dispatch(showLoading())
    axiosInstance.get(`/bookings/booking/${bookingId}`)
      .then(res => {
        dispatch(hideLoading());
        dispatch(fetchBookingByIdSuccess(res.data))
      })
      .catch(({ response }) => {
        dispatch(hideLoading());
        if (response.status === 500)
          toast.error(response.data);
        else toast.error(response.data.errors.detail)
      })
  }
}
export const resetBookingState = () => {
  return {
    type: RESET_BOOKING_STATE
  }
}
export const createBooking = (booking) => {
  return (dispatch) => {
    dispatch(resetBookingState())
    dispatch(showLoading())
    return axiosInstance.post('/bookings/book', booking)
      .then(res => {
        toast.success('Đặt phòng thành công')
        dispatch(hideLoading())
        dispatch(createBookingSuccess(res.data))
      })
      .catch(({ response }) => {
        console.log(response)
        dispatch(hideLoading());
        if (response.status === 500)
          toast.error(response.data);
        else toast.error(response.data.errors.detail)
      })
  }
}
