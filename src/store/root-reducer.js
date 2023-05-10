import { combineReducers } from 'redux';

import { photosReducer } from './photos/photos.reducer';

export const rootReducer = combineReducers({
  photos: photosReducer,
});