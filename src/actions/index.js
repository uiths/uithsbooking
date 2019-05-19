import axios from 'axios';
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
  FETCH_RENTALS_INIT,
  FETCH_RENTALS_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILURE,
  FETCH_USER_BY_ID_SUCCESS,
  FETCH_USER_BY_ID_INIT,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  FETCH_USER_BOOKINGS_SUCCESS,
  FETCH_USER_BOOKINGS_FAIL,
  FETCH_USER_BOOKINGS_INIT,
  CREATE_BOOKING_FAIL,
  CREATE_BOOKING_SUCCESS,
  RESET_BOOKING_STATE,
  UPDATE_RENTAL_SUCCESS,
  UPDATE_RENTAL_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  RESET_RENTAL_ERRORS,
  RELOAD_MAP,
  RELOAD_MAP_FINISH,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILURE,
  RESET_USER_STATE,
  DELETE_RENTAL_SUCCESS,
  DELETE_RENTAL_FAILURE,
  CREATE_RENTAL_SUCCESS,
  CREATE_RENTAL_FAILURE,
  RESET_RENTAL_STATE,
  FETCH_BOOKING_BY_ID_SUCCESS,
  FETCH_BOOKING_BY_ID_FAILURE,
  SORT_BOOKING
} from './types';

const axiosInstance = axiosService.getInstance();

export const verifyRentalOwner = (rentalId) => {
  return axiosInstance.get(`/rentals/${rentalId}/verify-user`);
}

export const reloadMap = () => {
  return {
    type: RELOAD_MAP
  }
}

export const reloadMapFinish = () => {
  return {
    type: RELOAD_MAP_FINISH
  }
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

const fetchRentalsInit = () => {
  return {
    type: FETCH_RENTALS_INIT
  }
}

const fetchRentalsFail = (errors) => {
  return {
    type: FETCH_RENTALS_FAIL,
    errors
  }
}

export const fetchRentals = (city) => {
  const url = city ? `/rentals?city=${city}` : '/rentals';

  return dispatch => {
    dispatch(fetchRentalsInit());

    axiosInstance.get(url)
      .then(res => res.data)
      .then(rentals => dispatch(fetchRentalsSuccess(rentals)))
      .catch(({ response }) => dispatch(fetchRentalsFail(response.data.errors)))
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
const createRentalSuccess = (data) => {
  return {
    type: CREATE_RENTAL_SUCCESS,
    data
  }
}
const createRentalFailure = (errors) => {
  return {
    type: CREATE_RENTAL_FAILURE,
    errors
  }
}
export const createRental = (rentalData) => {
  // const image = []
  // console.log(rentalData)
  // const change = rentalData.image.map(i => {
  //   if (i !== null)
  //     image.push(i)
  // })
  // Promise.all(change).then(() => {
  //   Object.assign(rentalData, { image: image })
  //   console.log(rentalData)
  return dispatch => {
    dispatch(startSubmit('rentalCreateForm'))
    return axiosInstance.post('/rentals/create', rentalData)
      .then((res) => {
        dispatch(stopSubmit('rentalCreateForm'))
        dispatch(createRentalSuccess(res.data))
      })
      .catch(({ response }) => {
        console.log(response.data.errors)
        dispatch(stopSubmit('rentalCreateForm'))
        dispatch(createRentalFailure(response.data.errors))
        return response.data.errors
      })
  }
  // })
}
const editRentalSuccess = (data) => {
  return {
    type: UPDATE_RENTAL_SUCCESS,
    data
  }
}
const editRentalFail = () => {
  return { type: UPDATE_RENTAL_FAIL }
}
export const editRental = (rentalData, id) => {
  // const image = []
  // console.log(rentalData)
  // const change = rentalData.image.map(i => {
  //   if (i !== null)
  //     image.push(i)
  // })
  // Promise.all(change).then(() => {
  //   Object.assign(rentalData, { image: image })
  return dispatch => {
    dispatch(startSubmit('rentalCreateForm'))
    axiosInstance.post(`/rentals/update/${id}`, rentalData)
      .then(res => {
        console.log(res.data)
        dispatch(stopSubmit('rentalCreateForm'))
        dispatch(editRentalSuccess(res.data))
      })
      .catch(({ response }) => {
        dispatch(stopSubmit('rentalCreateForm'))
        Promise.reject(response.data.errors)
      }
      )
  }
  // })
  // const change = image.map(i => {
  //   if(i!=null && i.includes(',')){
  //     const base64 = (i.split(','))[1]
  //     formData.append(`${image.indexOf(i)}`,base64toBlob(base64,'image/png'))
  //     image[image.indexOf(i)] = null
  //   }
  // })
  // Promise.all(change).then(()=>{
  //   rentalData.image = image;
  //   for (var key in rentalData) {
  //     formData.append(key, rentalData[key]);
  //   }
  //   console.log(rentalData)

  //   axiosInstance.post(`/rentals/${id}`, formData)
  // })

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
const updateRentalSuccess = (updatedRental) => {
  return {
    type: UPDATE_RENTAL_SUCCESS,
    rental: updatedRental
  }
}

const updateRentalFail = (errors) => {
  return {
    type: UPDATE_RENTAL_FAIL,
    errors
  }
}

export const updateRental = (id, rentalData) => dispatch => {
  return axiosInstance.patch(`/rentals/${id}`, rentalData)
    .then(res => res.data)
    .then(updatedRental => {
      dispatch(updateRentalSuccess(updatedRental));

      if (rentalData.city || rentalData.street) {
        dispatch(reloadMap());
      }
    })
    .catch(({ response }) => dispatch(updateRentalFail(response.data.errors)))
}

// USER BOOKINGS ACTIONS ---------------------------
export const sortBooking = (data) => {
  return {
    type: SORT_BOOKING,
    data
  }
}
const fetchUserBookingsInit = () => {
  return {
    type: FETCH_USER_BOOKINGS_INIT
  }
}
export const createPayment = (data) => {
  return dispatch => {
    axiosInstance.post("/payments/create", data)
      .then(res => {
        console.log(res.data)
        // dispatch(fetchBookingByIdSuccess(res.data));
      })
      .catch(res => { })
  }
}
const fetchUserBookingsSuccess = (userBookings) => {
  return {
    type: FETCH_USER_BOOKINGS_SUCCESS,
    userBookings
  }
}

const fetchUserBookingsFail = (errors) => {
  return {
    type: FETCH_USER_BOOKINGS_FAIL,
    errors
  }
}

export const fetchUserBookings = () => {
  return dispatch => {
    dispatch(fetchUserBookingsInit());

    axiosInstance.get('/bookings/manage')
      .then(res => res.data)
      .then(userBookings => dispatch(fetchUserBookingsSuccess(userBookings)))
      .catch(({ response }) => dispatch(fetchUserBookingsFail(response.data.errors)))
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
const deleteRentalFailure = (errors) => {
  return {
    type: DELETE_RENTAL_FAILURE,
    errors
  }
}
export const deleteRental = (rentalId) => {
  return dispatch => {
    return axiosInstance.delete(`/rentals/${rentalId}`)
      .then(res => dispatch(deleteRentalSuccess(res.data)))
      .catch(({ response }) => dispatch(deleteRentalFailure(response.data.errors)))
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
export const register = (userData) => {
  return dispatch => {
    dispatch(startSubmit('registerForm'))
    return axiosInstance.post('/users/register', userData)
      .then(res => {
        dispatch(stopSubmit('registerForm'))
        toast.success("Hãy kiểm tra email xác nhận")
      })
      .catch(({ response }) => {
        if (response.status === 500)
          toast.error(response.data);
        else toast.error(response.data.errors.detail)
        dispatch(stopSubmit('registerForm'))
      })
  }
}
export const checkAuthState = () => {
  return dispatch => {
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}
export const login = (userData) => {
  return dispatch => {
    dispatch(startSubmit('loginForm'))
    return axios.post('/api/v1/users/login', userData)
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token);
        dispatch(loginSuccess());
        dispatch(stopSubmit('loginForm'))
      })
      .catch(({ response }) => {
        if (response.status === 500)
          toast.error(response.data);
        else toast.error(response.data.errors.detail)
        dispatch(stopSubmit('loginForm'))
      })
  }
}

export const fetchUserById = (userId) => {
  return dispatch => {
    dispatch(fetchUserByIdInit());
    axiosInstance.get(`/users/info/${userId}`)
      .then(res => {
        dispatch(fetchUserByIdSuccess(res.data))
      })
    // .then(foundUser => dispatch(fetchUserByIdSuccess(foundUser)));
  }
}

const fetchUserByIdInit = () => {
  return {
    type: FETCH_USER_BY_ID_INIT
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
    return axios.post('/api/v1/users/forgotpass', email)
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
    return axios.post(`/api/v1/users/reset/${id}`, userData)
      .then(res => {
        dispatch(resetSuccess())
      })
      .catch(response => {
        console.log(response)
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
  console.log(userData);
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


  // return (dispatch) => {
  //   return axiosInstance.post('/users/change', userData)
  //   .then(res => {
  //     console.log(res)
  //     dispatch(updatePassSuccess())
  //     // return res.data
  //   })
  //   .catch(res => {
  //     console.log(res)
  //     dispatch(updatePassFailure(res.data.errors));
  //     // return res.data
  //   })
  // }
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
const uploadFailure = (errors) => {
  return {
    type: UPLOAD_AVATAR_FAILURE,
    errors
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
      })
      .catch(({ response }) => {
        dispatch(stopSubmit('editAvatarForm'))
        Promise.reject(response.data.errors)
      })
  }
}

const createBookingFail = (errors) => {
  return {
    type: CREATE_BOOKING_FAIL,
    errors
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
  console.log(bookingId)
  return dispatch => {
    axiosInstance.get(`/bookings/booking/${bookingId}`)
      .then(res => { console.log(res.data); dispatch(fetchBookingByIdSuccess(res.data)) })
    // .then(rental => dispatch(fetchBookingByIdSuccess(rental)));
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
    dispatch(startSubmit('rentalDateForm'))
    return axiosInstance.post('/bookings/book', booking)
      .then(res => {
        console.log(res.data)
        dispatch(stopSubmit('rentalDateForm'))
        dispatch(createBookingSuccess(res.data))
      })
      .catch(({ response }) => {
        console.log(response.data.errors)
        dispatch(stopSubmit('rentalDateForm'))
        dispatch(createBookingFail(response.data.errors))
      })
  }
}


export const uploadImage = image => {
  const formData = new FormData();
  formData.append('image', image);

  return axiosInstance.post('/image-upload', formData)
    .then(json => {
      return json.data.imageUrl;
    })
    .catch(({ response }) => Promise.reject(response.data.errors[0]))
}


export const getPendingPayments = () => {
  return axiosInstance.get('/payments')
    .then(res => res.data)
    .catch(({ response }) => Promise.reject(response.data.errors))
}

export const acceptPayment = (payment) => {
  return axiosInstance.post('/payments/accept', payment)
    .then(res => res.data)
    .catch(({ response }) => Promise.reject(response.data.errors))
}

export const declinePayment = (payment) => {
  return axiosInstance.post('/payments/decline', payment)
    .then(res => res.data)
    .catch(({ response }) => Promise.reject(response.data.errors))
}
































