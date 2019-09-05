import { SET_DATA } from "./types";
import axios from "axios";

const REACT_APP_API_URL = "http://localhost:5000/api/";

// Error handling function
export const handleError = error => {
  console.log(error);
  // Handle Error
};

// Fetch data, GET
export const fetchData = url => async dispatch => {
  const onSuccess = data => {
    dispatch({
      type: SET_DATA,
      payload: { data }
    });
  };

  try {
    // Request data
    const response = await axios.get(`${REACT_APP_API_URL}${url}`);

    return onSuccess(response.data);
  } catch (error) {
    // Return error to Error handling function
    return dispatch(handleError(error.response.data));
  }
};
