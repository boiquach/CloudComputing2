import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import sites from "./reducers/reducer";
import site from "./reducers/reducer"
import image_error from "./reducers/reducer"
import image from "./reducers/reducer"
import image_showProgress from "./reducers/reducer"
import image_percent from "./reducers/reducer"
import {fb} from "./config/index";
import {getFirebase, firebaseReducer} from "react-redux-firebase"
import {reduxFirestore, getFirestore, firestoreReducer,} from "redux-firestore";
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    form:formReducer,
    sites:sites,
    site:site,
    image_error:image_error,
    image_percent:image_percent,
    image:image,
    image_showProgress:image_showProgress
})

const Store = createStore(rootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),reduxFirestore(fb)))

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
