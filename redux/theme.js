import * as ActionTypes from "./ActionTypes";

export const theme = (
  state = {
    isLoading: true,
    errMess: null,
    data: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.THEME_LOADING:
      return { ...state, isLoading: true, errMess: null, data: [] };
    case ActionTypes.THEME_UPDATE:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        data: action.payload,
      };
    case ActionTypes.THEME_ERROR:
      return { ...state, isLoading: false, errMess: "No Data Found", data: [] };
    default:
      return state;
  }
};
