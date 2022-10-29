import { useEffect, useState } from "react";
import "./App.css";
import firebase from "./firebase";
import { useTheme } from "./hooks/useTheme";
import Dashboard from "./layout/Dashboard";

// import * as firebase from "firebase/app";
// import {getAuth} from "firebase/auth";
// import "firebase/firestore";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

// firebase.initializeApp({
//   apiKey: "AIzaSyBvIbL0G6iJ_GQC4Bm45-VPyJpi_nt07Uk",
//   authDomain: "texta-5d312.firebaseapp.com",
//   projectId: "texta-5d312",
//   storageBucket: "texta-5d312.appspot.com",
//   messagingSenderId: "472958046615",
//   appId: "1:472958046615:web:ef85fcc854994a8cc7b4d2",
//   measurementId: "G-FT6WCHVM0K",
// });

// const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
  const { theme } = useTheme();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const favouritesRef = firebase.firestore().collection("favourites");
  const params = new URLSearchParams(window.location.search);

  const getData = () => {
    favouritesRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((res) => {
        items.push(res.data());
      });

      setData(items);
      setLoader(false);
    });
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div className={theme}>
      <Dashboard />
    </div>
  );
}

export default App;
