import firebase from "firebase/app"
import "firebase/firestore"

// import {API_KEY} from "./keys"

const FirebaseConfig={
    apiKey: "AIzaSyD1z21IPJkAPaj5lmKmxZbhTn3sS8yxyK0",
    authDomain: "week4-9197d.firebaseapp.com",
    databaseURL: "https://week4-9197d.firebaseio.com",
    projectId: "week4-9197d",
    storageBucket: "week4-9197d.appspot.com",
    messagingSenderId: "889136224927",
    appId: "1:889136224927:web:0e196514d977df2d29e0aa",
    measurementId: "G-LQLY7S80JQ"

}

firebase.initializeApp(FirebaseConfig);
//firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase