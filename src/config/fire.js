// import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import 'firebase/auth'
import { getStorage } from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyBPerCmfbyPgapRimuQkcmrmeiQOiI2sBE",
  authDomain: "tess-40ba4.firebaseapp.com",
  projectId: "tess-40ba4",
  storageBucket: "tess-40ba4.appspot.com",
  messagingSenderId: "999010884419",
  appId: "1:999010884419:web:c4847cd0a983dc3759adf6"
};


// firebase.initializeApp(firebaseConfig);
// export default firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const imageDB = getStorage(app)
export const db = getFirestore(app)

// const init = firebase.initializeApp(firebaseConfig)
// export const firebaseAuthtentication = get.auth(init)

// import firebase from "firebase/compat/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
// import {getStorage} from 'firebase/storage'


// var firebaseConfig = {
//   apiKey: "AIzaSyC1yngpXlSlbxmZNc5sV7DXUvkZMWUHuww",
//   authDomain: "awan-7341f.firebaseapp.com",
//   projectId: "awan-7341f",
//   storageBucket: "awan-7341f.appspot.com",
//   messagingSenderId: "938014986468",
//   appId: "1:938014986468:web:a6bfbded08404605321cf1"
// };

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore;
// export const database = {
//   users: firestore.collection("users"),
//   docs: firestore.collection("docs"),
//   files: firestore.collection("files"),
//   date: firebase.firestore.FieldValue.serverTimestamp(),
// };

// export const storage = firebase.storage();

// export const auth = firebase.auth();
// export const imageDB = getStorage()
