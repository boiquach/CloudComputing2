import { combineReducers } from "redux";
//custom reducers:
import {
  // initialState as siteInitState,
  reducer as siteReducer
} from "./reducer";
import {
  // initialState as userInitState,
  reducer as userReducer
} from "./userReducer";

//firebase reducer
import { firebaseReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import { firestoreReducer } from "redux-firestore";

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  form: formReducer,
  siteReducer: siteReducer,
  userReducer: userReducer
});
