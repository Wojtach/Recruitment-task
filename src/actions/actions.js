import { asyncActionCreatorFactory } from '../HOR/HOR';
import { SET_ID, USERS, POSTS, COMMENTS } from './actionTypes';

export const fetchUsersAction = asyncActionCreatorFactory(
    USERS,
    () => {
        return fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
    }
);
export const fetchUsers = () => dispatch => {
    dispatch(fetchUsersAction());
}

export const setIdAction = (id) => ({
    type: SET_ID,
    payload: id
})

export const fetchPostsAction = asyncActionCreatorFactory(
    POSTS,
    (dispatch, getState) => {
        return fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=" + encodeURIComponent(getState().reducer.id)
        );
    }
);

export const fetchPosts = id => dispatch => {
    dispatch(setIdAction(id));
    dispatch(fetchPostsAction());
};

export const fetchCommentsAction = asyncActionCreatorFactory(
    COMMENTS,
    (dispatch, getState) => {
        return fetch(
            "https://jsonplaceholder.typicode.com/comments?postId=" + encodeURIComponent(getState().reducer.id)
        );
    }
);

export const fetchComments = id => dispatch => {
    dispatch(setIdAction(id));
    dispatch(fetchCommentsAction());
};
