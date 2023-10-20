import { 
    GAASSET_LIST_REQUEST,
    GAASSET_LIST_SUCCESS,
    GAASSET_LIST_FAIL 
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