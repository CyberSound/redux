import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_QUOTES } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchQuotes = () => async dispatch => {
  const res = await axios.get("/api/quotes");
  dispatch({
    type: FETCH_QUOTES,
    payload: res.data
  });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const postQuotes = values => async dispatch => {
  const res = await axios.post("/api/quotes", values);
};

export const likeQuotes = id => async dispatch => {
  const values = {};
  values.likes = values.likes + 1;
  const res = await axios.put(`/api/quotes/like/${id}`, values);
};

export const deleteQuotes = id => async dispatch => {
  const res = await axios.delete(`/api/quotes/${id}`);
};
