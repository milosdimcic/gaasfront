import { 
    GAASSET_LIST_REQUEST,
    GAASSET_LIST_SUCCESS,
    GAASSET_LIST_FAIL ,

    GAASSET_DETAILS_REQUEST,
    GAASSET_DETAILS_SUCCESS,
    GAASSET_DETAILS_FAIL, 
 } from '../constants/gaassetConstants'

export const gaassetListReducer = (state = { gaassets: [] }, action) => {
  switch (action.type) {
    case GAASSET_LIST_REQUEST:
      return { loading: true, gaassets: [] };

    case GAASSET_LIST_SUCCESS:
      return { loading: false, gaassets: action.payload };

    case GAASSET_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const gaassetDetailsReducer = (state = { gaasset: {reviews: []} }, action) => {
  switch (action.type) {
    case GAASSET_DETAILS_REQUEST:
      return { loading: true, ...state };

    case GAASSET_DETAILS_SUCCESS:
      return { loading: false, gaasset: action.payload };

    case GAASSET_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};