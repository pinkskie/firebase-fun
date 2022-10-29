import { refEqual } from "@firebase/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import firebase from "./firebase";
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

const AUTH_LINK = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=user-library-read&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [isDark, setDark] = useState(true);

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
    <div className={isDark ? "App dark" : "App"}>
      <div className="login">
        <button onClick={() => setDark((v) => !v)}>OAKSOAKS</button>
        <a href={AUTH_LINK}>login</a>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
