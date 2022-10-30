import { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../../firebase";
import useData from "../../hooks/useData";
import "./Login.scss";

const AUTH_LINK = `https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=user-library-read&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

export default function Login() {
  const { createUser } = useData("users");
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const [token, setToken] = useState('')


  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if (!token && hash) {
      token = hash.substring(1).split('&').find(elem=> elem.startsWith('access_token')).split("=")[1]
    }

    setToken(token)

    if (userId) {
      navigate("/");
    }

    if (!userId && token) {
      createUser({ token: token, timestamp: firebase.firestore.Timestamp.now() })
        .then((id) => {
          localStorage.setItem("userId", id);
        })
        .finally(() => {
          navigate("/");
        });
    }
  }, []);

  return (
    <div className="login">
      <a href={AUTH_LINK} className="link">
        login
      </a>
    </div>
  );
}
