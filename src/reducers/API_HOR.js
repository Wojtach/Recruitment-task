import { asyncReducerFactory } from "../utils/HOR";


export const users = asyncReducerFactory("USERS");
export const posts = asyncReducerFactory("POSTS");
export const comments = asyncReducerFactory("COMMENTS");