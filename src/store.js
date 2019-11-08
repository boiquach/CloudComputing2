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

const store=createStore(rootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirestore})),reduxFirestore(firebase)))

export default store;