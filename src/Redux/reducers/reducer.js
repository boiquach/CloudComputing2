import * as siteActionTypes from "../actions/actionTypes";

export const initialState = {
  sites: [],
  site: {},
  image_error: null,
  image_percent: null,
  image_showProgress: false,
  image: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case QUERY:
    //   return { ...state, sites: action.sites };
    // case SUBSCRIPTION:
    //   return { ...state, sites: [...state.sites, action.site] };
    case siteActionTypes.FETCH_SITES:
      return {
        ...state,
        sites: action.payload
      };
    case siteActionTypes.FETCH_SITE: {
      return {
        ...state,
        site: action.payload
      };
    }
    case siteActionTypes.UPLOADING: {
      return {
        ...state,
        image_percent: action.payload
      };
    }
    case siteActionTypes.UPLOADING_START: {
      return {
        ...state,
        image_percent: 0
      };
    }
    case siteActionTypes.UPLOADING_SUCCESS: {
      return {
        ...state,
        image_error: false,
        image_percent: null,
        image: action.payload
      };
    }
    case siteActionTypes.UPLOADING_FAIL: {
      return {
        ...state,
        image_error: action.payload
      };
    }
    case siteActionTypes.FETCH_IMAGE: {
      return {
        ...state,
        image: action.payload
      };
    }
    default:
      return state;
  }
};
