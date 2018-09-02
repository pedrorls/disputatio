import { combineReducers } from 'redux';

import PostsReducer from '../reducers/posts_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;