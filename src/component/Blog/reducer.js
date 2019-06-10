import {
    GET_BLOG_SUCCESS,
    GET_BLOG_BY_ID_SUCCESS
} from './actions';
import _ from 'lodash'
const initState = {
    blogList: [],
    blog: {}
};

export function blogReducer(state = initState, action) {
    switch (action.type) {
        case GET_BLOG_SUCCESS:
            return { ...state, blogList: action.data }
        case GET_BLOG_BY_ID_SUCCESS:
            return { ...state, blog: action.data};
        default:
            return state;
    }
}
