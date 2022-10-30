import "./Block.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firebase from "../../firebase";

import arrowLeft from "./assets/icons/chevron-left.svg";
import arrowRight from "./assets/icons/chevron-right.svg";

export default function Block({ musics, title }) {
  const favoritesRef = firebase.firestore().collection("favourites");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const addToFavourite = async (trackId) => {
    await favoritesRef.add({ userId: localStorage.getItem("userId"), trackId });
  };

  return (
    <div className="block">
      <div className="head">
        <p className="title">{title}</p>
        <div className="divider" />
        <div className="arrows">
          <img src={arrowLeft} alt="arrow_left" />
          <img src={arrowRight} alt="arrow_left" />
        </div>
      </div>
      <div className="row">
        {musics.map((item) => (
          <div
            className="single"
            key={item.track.id}
            onClick={() => addToFavourite(item.track.id)}
          >
            <img src={item.track.album.images[0].url} alt="img" />
            <p>{item.track.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
