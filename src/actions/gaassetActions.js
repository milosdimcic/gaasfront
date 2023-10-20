import axios from "axios";
import {
  GAASSET_LIST_REQUEST,
  GAASSET_LIST_SUCCESS,
  GAASSET_LIST_FAIL,
} from "../constants/gaassetConstants";

export const listGaassets = () => async (dispatch) => {
  try {
    dispatch({ type: GAASSET_LIST_REQUEST });

    const { data } = await axios.get("/api/gaassets/");

    dispatch({
      type: GAASSET_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAASSET_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
