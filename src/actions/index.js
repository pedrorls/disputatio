import axios from 'axios';

import { FETCH_POSTS } from '../actions/tsypes';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    console.log(request);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}