import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  sites: [],
  site: {},
  image_error: null,
  image_percent: null,
  image_showProgress: false,
  image: "",
  volunteerEmail: [],
  volunteerObject: [],
  reports: [],
  fetching: true,
  fetchingFail: false,
  report: {},
  fetchingReport: true,
  reportFail: false
};

export const reducer = (state = initialState, action) => {
  // console.log("siteReducer: ", action.type, " payload: ", action.payload);
  switch (action.type) {
    case actionTypes.ADD_SITE:
      console.log(
        "siteReducer case: ",
        action.type,
        " payload: ",
        action.payload
      );
      return {
        ...state,
        sites: [...state.sites, action.payload]
      };
    case actionTypes.DELETE_SITE: {
      return {
        ...state,
        site: {}
      };
    }
    case actionTypes.EDIT_SITE:
      console.log(
        "siteReducer case: ",
        action.type,
        " payload: ",
        action.payload
      );
      return {
        ...state,
        sites: state.sites.map(site => {
          if (site.id !== action.payload.id) {
            return site;
          } else {
            return action.payload;
          }
        })
      };
    case actionTypes.FETCH_SITES:
      console.log(
        "siteReducer case: ",
        action.type,
        " payload: ",
        action.payload
      );
      return {
        ...state,
        sites: [...action.payload]
      };

    case actionTypes.FETCH_SITE: {
      return {
        ...state,
        site: action.payload,
        fetching: false
      };
    }
    case actionTypes.FETCHING_FAIL:
      return {
        ...state,
        fetchingFail: true,
        fetching: false
      };
    case actionTypes.UPLOADING: {
      return {
        ...state,
        image_percent: action.payload
      };
    }
    case actionTypes.UPLOADING_START: {
      return {
        ...state,
        image_percent: 0
      };
    }
    case actionTypes.UPLOADING_SUCCESS: {
      return {
        ...state,
        image_error: false,
        image_percent: null,
        image: action.payload
      };
    }
    case actionTypes.UPLOADING_FAIL: {
      return {
        ...state,
        image_error: action.payload
      };
    }
    case actionTypes.FETCH_IMAGE: {
      return {
        ...state,
        image: action.payload
      };
    }

    case actionTypes.FETCH_REPORTS: {
      return {
        ...state,
        reports: action.payload,
        fetchingReport: false
      };
    }
    case actionTypes.FETCH_REPORT: {
      return {
        ...state,
        report: action.payload,
        fetchingReport: false
      };
    }
    case actionTypes.REPORT_FAIL: {
      return {
        ...state,
        reportFail: true,
        fetchingReport: false
      };
    }
    case actionTypes.REPORT_LOADING: {
      return {
        ...state,
        fetchingReport: true,
        reportFail: false
      };
    }

    default:
      return state;
  }
};
