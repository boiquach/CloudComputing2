import { combineReducers } from "redux";
//custom reducers:
import {
  initialState as siteInitState,
  reducer as siteReducer
} from "./reducer";
import {
  initialState as userInitState,
  reducer as userReducer
} from "./reducer";

//firebase reducer
import { firebaseReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import { firestoreReducer } from "redux-firestore";

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  form: formReducer,
  siteReducer: siteReducer.reducer,
  userReducer: userReducer.reducer
});

export const initialState = {
  sites: siteInitState.sites,
  site: siteInitState.site,
  image_error: siteInitState.image_error,
  image_percent: siteInitState.image_percent,
  image_showProgress: siteInitState.image_showProgress,
  image: siteInitState.image,
  //user state
  user: userInitState.user,
  avatar: userInitState.avatar,
  avartarImage: userInitState.avartarImage,
  loggedIn: userInitState.loggedIn,
  ownedSites: userInitState.ownedSites,
  jointedSites: userInitState.jointedSites
};
