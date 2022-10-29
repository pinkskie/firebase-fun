import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvIbL0G6iJ_GQC4Bm45-VPyJpi_nt07Uk",
  authDomain: "texta-5d312.firebaseapp.com",
  projectId: "texta-5d312",
  storageBucket: "texta-5d312.appspot.com",
  messagingSenderId: "472958046615",
  appId: "1:472958046615:web:ef85fcc854994a8cc7b4d2",
  measurementId: "G-FT6WCHVM0K",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
