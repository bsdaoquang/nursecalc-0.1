import * as firebase from 'firebase'
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC2dGQIc8cSNn7ik5VUJgfZPIfEOn6-eVM",
    authDomain: "yhocso-ecd6f.firebaseapp.com",
    databaseURL: "https://yhocso-ecd6f.firebaseio.com",
    projectId: "yhocso-ecd6f",
    storageBucket: "yhocso-ecd6f.appspot.com",
    messagingSenderId: "785559206451",
    appId: "1:785559206451:web:6e215061f8b8f19ad2c146",
    measurementId: "G-FRNQZ1TM3D"
  };
  // Initialize Firebase
export const fireBase = firebase.initializeApp(firebaseConfig);
