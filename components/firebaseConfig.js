import * as firebase from 'firebase'
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCDGDSAvpORHiC6l1KDJyv8Z0jj_oxoqds",
    authDomain: "trolydieuduong-b6c5f.firebaseapp.com",
    databaseURL: "https://trolydieuduong-b6c5f-default-rtdb.firebaseio.com",
    projectId: "trolydieuduong-b6c5f",
    storageBucket: "trolydieuduong-b6c5f.appspot.com",
    messagingSenderId: "353309969179",
    appId: "1:353309969179:web:0af23bda9c1479c48be1be",
    measurementId: "G-1BFBTYN3FT"
};
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

var database = firebaseApp.database();