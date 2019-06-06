import {
  FETCH_USER_BOOKINGS_SUCCESS,
  FETCH_USER_BOOKINGS_FAIL,
  FETCH_USER_BOOKINGS_INIT,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAIL,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILURE,
  FETCH_BOOKING_BY_ID_SUCCESS,
  SORT_BY_BOOKINGS
} from 'actions/types';
import { compare } from 'helpers'
import { RESET_BOOKING_STATE} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  booking: [],
  errors: [],
  isFetching: false,
  isSuccess: false,
  isDeleted: false
}

export const userBookingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_BOOKINGS_INIT:
      return { ...state, data: [], errors: [], isFetching: true };
    case FETCH_USER_BOOKINGS_SUCCESS:
      return { ...state, data: action.userBookings, errors: [], isFetching: false };
    case FETCH_USER_BOOKINGS_FAIL:
      return { ...state, errors: [], data: [], isFetching: false };
    case CREATE_BOOKING_SUCCESS:
      return { ...state, isSuccess: true, data: action.data };
    case CREATE_BOOKING_FAIL:
      return { ...state, isSuccess: false, errors: action.errors };
    case DELETE_BOOKING_SUCCESS:
      return { ...state, isDeleted: true, data: action.data }
    case DELETE_BOOKING_FAILURE:
      return { ...state, errors: action.errors }
    case RESET_BOOKING_STATE:
      return { ...state, isSuccess: false, isDeleted: false, errors: [] }
    case FETCH_BOOKING_BY_ID_SUCCESS:
      return { ...state, booking: action.data }
    case SORT_BY_BOOKINGS:
      return {...state, data: action.data }
    default:
      return state;
  }
}
