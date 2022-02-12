import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXothGmBkRtc77vRdcKXkwTsLWVWCoN6w",
  authDomain: "clone-5cbfd.firebaseapp.com",
  projectId: "clone-5cbfd",
  storageBucket: "clone-5cbfd.appspot.com",
  messagingSenderId: "834128526042",
  appId: "1:834128526042:web:4b4fe43e50d9bcba1ac3e3",
  measurementId: "G-MVDKL7R7DK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
