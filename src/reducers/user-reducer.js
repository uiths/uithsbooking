import {
    SEND_MAIL_SUCCESS, SEND_MAIL_FAILURE,
    RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
    UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_FAILURE,
    FETCH_USER_BY_ID_INIT,
    FETCH_USER_BY_ID_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    isSend: false,
    isReset: false,
    isUpdated: false,
    isError: false,
    data: [],
    errors: []
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_MAIL_SUCCESS:
            return { ...state, isSend: true, errors: [] };
        case SEND_MAIL_FAILURE:
            return { ...state, isSend: false, errors: action.errors };
        case RESET_PASSWORD_SUCCESS:
            return { ...state, isReset: true, errors: [] }
        case RESET_PASSWORD_FAILURE:
            return { ...state, isReset: false, errors: action.errors }
        case FETCH_USER_BY_ID_INIT:
            return { ...state, data: {} };
        case FETCH_USER_BY_ID_SUCCESS:
            return Object.assign({}, state, { data: action.user });
        case UPDATE_PASSWORD_SUCCESS:
            return {...state, isUpdated: true};
        case UPDATE_PASSWORD_FAILURE:
            return {...state, errors:action.errors, isError: true};
            
        default:
            return state;
    }
}
