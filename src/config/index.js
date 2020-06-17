import * as firebase from "firebase"

// import {API_KEY} from "./keys"
const firebaseConfig = {
  apiKey: "AIzaSyD1z21IPJkAPaj5lmKmxZbhTn3sS8yxyK0",
    authDomain: "week4-9197d.firebaseapp.com",
    databaseURL: "https://week4-9197d.firebaseio.com",
    projectId: "week4-9197d",
    storageBucket: "week4-9197d.appspot.com",
    messagingSenderId: "889136224927",
    appId: "1:889136224927:web:0e196514d977df2d29e0aa",
    measurementId: "G-LQLY7S80JQ"

};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence().then(
  ()=>{
    firebase.firestore();
  }
)


//firebase.firestore().settings({timestampsInSnapshots:true});
export const facebook = firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const storageRef = storage.ref()
export const fb = firebase