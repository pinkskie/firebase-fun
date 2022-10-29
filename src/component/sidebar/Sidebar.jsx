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
        <img src={avatar} alt="avatar" className="user--avatar" />
        <span className="user--name">Bob Smith</span>
      </div>
      <ul className="links">
        <li>
          <img src={headphonesIcon} alt="headphones" />
          <span>Discover</span>
        </li>
        <li>
          <img src={searchIcon} alt="headphones" />
          <span>Search</span>
        </li>
        <li>
          <img src={heartIcon} alt="headphones" />
          <span>Favorites</span>
        </li>
        <li>
          <img src={playlistIcon} alt="headphones" />
          <span>Playlists</span>
        </li>
        <li>
          <img src={musicListIcon} alt="headphones" />
          <span>Charts</span>
        </li>
      </ul>
      <input className="search" placeholder="Search..." />
    </div>
  );
}
