import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
    const { data } = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: data });
};

export const postStripeToken = (token) => async (dispatch) => {
    const { data } = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: data });
};

export const submitSurvey = (values) => async (dispatch) => {
    const { data } = await axios.post("/api/survey", values);
    dispatch({ type: FETCH_USER, payload: data });
};
