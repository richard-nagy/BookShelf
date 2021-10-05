import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgf4cMYXFudM-jea42t4dfz4dCwonnT8Q",
  authDomain: "bookshelf-ac6cc.firebaseapp.com",
  projectId: "bookshelf-ac6cc",
  storageBucket: "bookshelf-ac6cc.appspot.com",
  messagingSenderId: "522879903285",
  appId: "1:522879903285:web:2a8ee3c30885e2e085f37c",
  measurementId: "G-87XEN3NTBH",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
