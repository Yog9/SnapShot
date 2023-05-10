import USER_ACTION_TYPES from './photos.types';

export const USER_INITIAL_STATE = {
  photos: [],
};

export const photosReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, photos: payload };
    default:
      return state;
  }
};