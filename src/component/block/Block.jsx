import "./Block.scss";

import nectar from "./assets/Nectar.png";
import arrowLeft from "./assets/icons/chevron-left.svg";
import arrowRight from "./assets/icons/chevron-right.svg";

export default function Block() {
  return (
    <div className="block">
      <div className="head">
        <p className="title">Released this week</p>
        <div className="divider" />
        <div className="arrows">
          <img src={arrowLeft} alt="arrow_left" />
          <img src={arrowRight} alt="arrow_left" />
        </div>
      </div>
      <div className="row">
        <div className="single">
          <img src={nectar} alt="img" />
          <p>Nectar</p>
        </div>
        <div className="single">
          <img src={nectar} alt="img" />
          <p>Nectar</p>
        </div>
        <div className="single">
          <img src={nectar} alt="img" />
          <p>Nectar</p>
        </div>
        <div className="single">
          <img src={nectar} alt="img" />
          <p>Nectar</p>
        </div>
        <div className="single">
          <img src={nectar} alt="img" />
          <p>Nectar</p>
        </div>
      </div>
    </div>
  );
}
