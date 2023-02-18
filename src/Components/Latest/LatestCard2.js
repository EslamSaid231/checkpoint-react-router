import React from "react";
import { Link } from "react-router-dom";
import "./Latest2.css";
const LatestCard2 = ({
  item: {
    id,
    cover,
    name,
    rating,
    time,
    desc,
    starring,
    genres,
    tags,
    video,
    date,
  },
}) => {
  return (
    <>
      <div className="containerl2">
        <div className="coverImagel2">
          <img src={cover}></img>
        </div>
        <div>
          <h1>{name}</h1>
        </div>

        <div className="rating flex">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half"></i>
        </div>
        <div class="playButton row">
          <Link to={`/singlepage/${id}`}>
            <button>
              <div className="img">
                <img src="./images/play-button.png" alt="" />
                <img src="./images/play.png" alt="" className="change" />
              </div>
              <i style={{ textDecoration: "none" }}>WATCH TRAILER</i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestCard2;
