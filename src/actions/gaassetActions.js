import axios from "axios";
import {
  GAASSET_LIST_REQUEST,
  GAASSET_LIST_SUCCESS,
  GAASSET_LIST_FAIL,

  GAASSET_DETAILS_REQUEST,
  GAASSET_DETAILS_SUCCESS,
  GAASSET_DETAILS_FAIL,
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

export const listGaassetDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GAASSET_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/gaassets/${id}`);

    dispatch({
      type: GAASSET_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAASSET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
