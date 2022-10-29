import "./Dashboard.scss";

import Sidebar from "../component/sidebar/Sidebar";
import Block from "../component/block/Block";

import art from "../assets/girl.jpg";
import sun from "./icons/sun.svg";
import moon from "./icons/moon.svg";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <header className="header">
          <img src={art} alt="art" className="art" />
          <div className="text">
            <h1>Your favorite tunes</h1>
            <h2>
              All <img src={sun} alt="sun" /> and all{" "}
              <img src={moon} alt="sun" />
            </h2>
          </div>
        </header>
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
}
