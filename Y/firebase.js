import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXQAjETl0WjtOfNlMHRjSHYHvMo2-2exU",
    authDomain: "fir-login-cce0c.firebaseapp.com",
    databaseURL: "https://fir-login-cce0c.firebaseio.com",
    projectId: "fir-login-cce0c",
    storageBucket: "fir-login-cce0c.appspot.com",
    messagingSenderId: "166523565570",
    appId: "1:166523565570:web:d52cf656806747c3f1991b",
    measurementId: "G-SYXZ4YEPZE"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;