import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import data from "./reducers/dataReducer";
import firebase from "./config";
import {reduxFirestore, getFirestore, firestoreReducer} from "redux-firestore";


const rootReducer = combineReducers({
    firestoreTodo:firestoreReducer,
    data:data
})

const initialState = {};

const Store=createStore(rootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirestore})),reduxFirestore(firebase)))



ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
