import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//import reducers
import { rootReducer } from "./reducers/rootReducer";
//import personal middlewares
import loggingMiddleware from "./Middlewares/loggingMiddleware";

// import firebase middlewares
import { getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import { fb } from "../config/index";

export const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirestore, getFirebase }),
      loggingMiddleware
    ),
    reduxFirestore(fb)
  )
);
