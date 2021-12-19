import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO なんでこれで取得できないんだ？
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAUN1ko8RyDA9q2KuDYF6FkumWcY7-2dOY",
  authDomain: "oki-park-f5df4.firebaseapp.com",
  projectId: "oki-park-f5df4",
  storageBucket: "oki-park-f5df4.appspot.com",
  messagingSenderId: "468896269438",
  appId: "1:468896269438:web:a0bb18b2766f757047c42f",
  measurementId: "G-QEM25PR1B9",
};

console.log(process.env);
console.log(firebaseConfig);

let firebaseApp: firebase.app.App;
if (firebase.apps.length) {
  firebaseApp = firebase.app();
} else {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}
// const firebaseApp = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// });

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
