import * as ActionTypes from "./ActionTypes";
import * as SecureStore from "expo-secure-store";
import { default_theme } from "../const/default_theme";
import { firestore } from "../firebase/script";

export const fetchTheme = () => async (dispatch) => {
  dispatch(themeLoading());
  const ref = firestore.collection("profileData").doc("UHJLqJScdBNLKAplZd23");
  const doc = await ref.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    dispatch(addTheme(doc.data()));
  }
  setInterval(async () => {
    const ref = firestore.collection("profileData").doc("UHJLqJScdBNLKAplZd23");
    const doc = await ref.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      dispatch(addTheme(doc.data()));
    }
  }, 20000);
};

export const fetchUser = () => async (dispatch) => {
  dispatch(userLoading());
  const ref = firestore.collection("userData").doc("rGsIDagOJJhvB4Ik6dg6");
  const doc = await ref.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    dispatch(addUser(doc.data()));
  }
  setInterval(async () => {
    const ref = firestore.collection("userData").doc("rGsIDagOJJhvB4Ik6dg6");
    const doc = await ref.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      dispatch(addUser(doc.data()));
    }
  }, 20000);
};

export const themeLoading = () => ({
  type: ActionTypes.THEME_LOADING,
  payload: true,
});
export const addTheme = (data) => ({
  type: ActionTypes.THEME_UPDATE,
  payload: data,
});
export const themeError = () => ({
  type: ActionTypes.THEME_ERROR,
  payload: true,
});

export const userLoading = () => ({
  type: ActionTypes.USER_LOADING,
  payload: true,
});
export const addUser = (data) => ({
  type: ActionTypes.USER_UPDATE,
  payload: data,
});
export const userError = () => ({
  type: ActionTypes.USER_ERROR,
  payload: true,
});
