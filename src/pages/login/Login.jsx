import "./Login.scss";

const AUTH_LINK = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=user-library-read&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

export default function Login() {
  return (
    <div className="login">
      <a href={AUTH_LINK} className="link">
        login
      </a>
    </div>
  );
}
