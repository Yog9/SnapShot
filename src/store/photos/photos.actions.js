import PHOTOS_ACTION_TYPES from './photos.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setPhotos = (photos) =>
  createAction(PHOTOS_ACTION_TYPES.SET_PHOTOS, photos);


export const setSearchParamter = (searchInput) =>
  createAction(PHOTOS_ACTION_TYPES.SET_SEARCH_PARAMETER, searchInput);