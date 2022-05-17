import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    // Add your config here
    apiKey: "AIzaSyDhZoupDwYsldZ6xUwTIz9uMz9Ek2JlfRw",
    authDomain: "chat-room-b5664.firebaseapp.com",
    projectId: "chat-room-b5664",
    storageBucket: "chat-room-b5664.appspot.com",
    messagingSenderId: "225889663182",
    appId: "1:225889663182:web:68229210067b989c33389f",
    measurementId: "G-7H6T2576F1",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();