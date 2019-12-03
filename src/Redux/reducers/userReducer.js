import * as userActionTypes from "../actions/actionTypes";
const DEFAULT_AVATAR = "default url....";

export const initialState = {
  user: {},
  loggedIn: false,
  ownedSites: [],
  jointedSites: [],
  avartar: DEFAULT_AVATAR, //todo: pass the default url here
  avartarImage: null
};

export const reducer = (state = initialState, action) => {
  // console.log("userReducer: ", action.type, " payload: ", action.payload);
  switch (action.type) {
    case userActionTypes.LOG_IN:
      //this will not be call because the browser being redirected by aws login ui
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      };
    case userActionTypes.LOG_OUT: {
      return {
        ...state,
        loggedIn: false,
        user: {},
        ownedSites: [],
        jointedSites: [],
        avartar: DEFAULT_AVATAR,
        avartarImage: null
      };
    }
    case userActionTypes.UPDATE_USER_PROFILE:
      console.log(
        "userReducer: action type: ",
        action.type,
        " payload: ",
        action.payload
      );
      return {
        ...state,
        user: action.payload
      };
    case userActionTypes.CHECK_USER:
      console.log(
        "userReducer: action type: ",
        action.type,
        " payload: ",
        action.payload
      );
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      };
    //warning: check if it is working or not
    case userActionTypes.FETCH_AVATAR: {
      return {
        ...state,
        avartarImage: action.payload
      };
    }
    case userActionTypes.AVATAR_UPLOADING_START: {
      return {
        ...state,
        image_percent: 0
      };
    }
    case userActionTypes.AVATAR_UPLOADING_SUCCESS: {
      return {
        ...state,
        image_error: false,
        image_percent: null,
        avartarImage: action.payload
      };
    }
    case userActionTypes.AVATAR_UPLOADING_FAIL: {
      return {
        ...state,
        image_error: action.payload
      };
    }
    case userActionTypes.ADD_COMMENT:
      console.log(
        "userReducer: action type: ",
        action.type,
        " payload: ",
        action.payload
      );
      return {
        ...state,
        loggedIn: true,
        newComment: action.payload
      };
    case userActionTypes.ADD_POST:
      console.log(
        "userReducer: action type: ",
        action.type,
        " payload: ",
        action.payload
      );
      return {
        ...state,
        newPost: action.payload
      };
    default:
      return state;
  }
};
