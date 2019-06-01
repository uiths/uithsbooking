import {
    POST_COMMENT_SUCCESS,
    GET_COMMENT_SUCCESS,
    REMOVE_COMMENT
} from './actions';
import _ from 'lodash'
const initState = {
    commentList: [],
    page: 1,
    hasMore: true,
    number: 0
};

export function commentReducer(state = initState, action) {
    switch (action.type) {
        case POST_COMMENT_SUCCESS:
            const { comment = {} } = action;
            return { ...state, commentList: state.commentList.concat(comment) }
        case GET_COMMENT_SUCCESS:
            const { commentList = [] } = action
            if (_.isEmpty(commentList)) {
                return { ...state, hasMore: false, page: state.page + 1 };
            }
            return { ...state, commentList: state.commentList.concat(commentList), page: state.page + 1 };
        case REMOVE_COMMENT:
            return initState;
        default:
            return state;
    }
}
