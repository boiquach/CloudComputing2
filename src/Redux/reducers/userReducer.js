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
  switch (action.type) {
    case userActionTypes.LOG_IN:
      return {
        ...state,
        loggedIn: true,
        user: action.payload
        // ,ownedSites: action.payload.ownedSites,
        // jointedSites: action.payload.jointedSites,
        // avartar: action.payload.avartar,
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
        // site: action.payload
      };
    }
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

    default:
      return state;
  }
};
