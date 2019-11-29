import {
  FETCH_SITES,
  FETCH_SITE,
  UPLOADING,
  UPLOADING_FAIL,
  UPLOADING_START,
  UPLOADING_SUCCESS,
  FETCH_IMAGE,
  QUERY,
  SUBSCRIPTION
} from "../actions/siteAction";

const initialState = {
  sites: [],
  site: {},
  image_error: null,
  image_percent: null,
  image_showProgress: false,
  image: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUERY:
      return { ...state, sites: action.sites };
    case SUBSCRIPTION:
      return { ...state, sites: [...state.sites, action.site] };
    case FETCH_SITES:
      return {
        ...state,
        sites: action.payload
      };
    case FETCH_SITE: {
      return {
        ...state,
        site: action.payload
      };
    }
    case UPLOADING: {
      return {
        ...state,
        image_percent: action.payload
      };
    }
    case UPLOADING_START: {
      return {
        ...state,
        image_percent: 0
      };
    }
    case UPLOADING_SUCCESS: {
      return {
        ...state,
        image_error: false,
        image_percent: null,
        image: action.payload
      };
    }
    case UPLOADING_FAIL: {
      return {
        ...state,
        image_error: action.payload
      };
    }
    case FETCH_IMAGE: {
      return {
        ...state,
        image: action.payload
      };
    }
    default:
      return state;
  }
};
