import "./Sidebar.scss";

import avatar from "../../assets/avatar.png";
import headphonesIcon from "./icons/headphones.svg";
import heartIcon from "./icons/heart.svg";
import musicListIcon from "./icons/list-music.svg";
import playlistIcon from "./icons/play-circle.svg";
import searchIcon from "./icons/search.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user">
        <img src={avatar} alt="avatar" />
        <p>Bob Smith</p>
      </div>
      <ul className="links">
        <li>
          <img src={headphonesIcon} alt="headphones" />
          <p>Discover</p>
        </li>
        <li>
          <img src={searchIcon} alt="headphones" />
          <p>Search</p>
        </li>
        <li>
          <img src={heartIcon} alt="headphones" />
          <p>Favorites</p>
        </li>
        <li>
          <img src={playlistIcon} alt="headphones" />
          <p>Playlists</p>
        </li>
        <li>
          <img src={musicListIcon} alt="headphones" />
          <p>Charts</p>
        </li>
      </ul>
    </div>
  );
}
