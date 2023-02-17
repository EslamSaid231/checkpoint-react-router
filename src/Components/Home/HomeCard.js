import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";
const HomeCard = ({
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
    <div className="Container">
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
        </div>
        <div className="content flex">
          <div>
            <div className="details row">
              <h1 className="MovieTitle">{name.toUpperCase()}</h1>
              <div className="rating flex">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label>
                Rating: <span>{rating} GP</span>
              </label>
              <label>
                Time: <span>{time}</span>
              </label>
            </div>
            <p style={{ color: "white" }} className="description">
              {desc}
            </p>
            <div className="cast">
              <h4>
                Starring:
                <span>{starring}</span>
              </h4>
              <h4>
                Genres:
                <span>{genres}</span>
              </h4>
              <h4>
                Tags:
                <span>{tags}</span>
              </h4>
            </div>
            <button className="primary-btn">
              <i className="fas fa-play"></i>PLAY NOW
            </button>
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
      </div>
    </div>
  );
};

export default HomeCard;
