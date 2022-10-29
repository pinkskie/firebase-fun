import "./Dashboard.scss";

import Sidebar from "../component/sidebar/Sidebar";
import Block from "../component/block/Block";

import man from "./assets/man.png";
import woman from "./assets/woman.png";
import sun from "./assets/icons/sun.svg";
import moon from "./assets//icons/moon.svg";
import { useTheme } from "../hooks/useTheme";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <header className="header">
          <img src={theme === "dark" ? woman : man} alt="art" className="art" />
          <div className="text">
            <h1>Your favorite tunes</h1>
            <h2>
              All <img src={sun} alt="sun" onClick={() => setTheme("light")} />{" "}
              and all{" "}
              <img src={moon} alt="sun" onClick={() => setTheme("dark")} />
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
