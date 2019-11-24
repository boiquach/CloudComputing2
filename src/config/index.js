import * as firebase from "firebase"

// import {API_KEY} from "./keys"
const firebaseConfig = {
    apiKey: "AIzaSyD1z21IPJkAPaj5lmKmxZbhTn3sS8yxyK0",
    authDomain: "week4-9197d.firebaseapp.com",
    databaseURL: "https://week4-9197d.firebaseio.com",
    projectId: "week4-9197d",
    storageBucket: "week4-9197d.appspot.com",
    messagingSenderId: "889136224927",
    appId: "1:889136224927:web:c560fd15314505b029e0aa",
    measurementId: "G-KX1G12F4NV"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();
//firebase.firestore().settings({timestampsInSnapshots:true});
export const auth = firebase.auth()
export const storage = firebase.storage()
export const storageRef = storage.ref()
export const fb = firebase