import { combineReducers } from "redux";
import { users, posts, comments } from './API_HOR'
import { reducer } from './reducers'


export const rootReducer = combineReducers({
    users,
    posts,
    comments,
    reducer
});