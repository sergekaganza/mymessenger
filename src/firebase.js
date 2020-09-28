import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({

    apiKey: "AIzaSyA-1FtOsrCRse831W5IkatwxIgGMBUyWjs",
    authDomain: "mymessenger-react-app.firebaseapp.com",
    databaseURL: "https://mymessenger-react-app.firebaseio.com",
    projectId: "mymessenger-react-app",
    storageBucket: "mymessenger-react-app.appspot.com",
    messagingSenderId: "819908486140",
    appId: "1:819908486140:web:0760f5ef230cd66cbc0879",
    measurementId: "G-H5Q9E9WK1R"

  });
const db = firebaseApp.firestore();

export default db;