import React, { useLayoutEffect, useState } from "react";

import { latest } from "../../dummyData";
import "./Latest2.css";
import "tachyons";
import { Link } from "react-router-dom";
const Latest2 = () => {
  const [currentState, setcurrentState] = useState(0);
  const goToNext = (currentState) => {
    setcurrentState(currentState);
    console.log(currentState);
  };
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 4) {
        setcurrentState(0);
      } else {
        setcurrentState(currentState + 1);
      }
    }, 6000);
  });
  const covers = {
    backgroundImage: `url(${latest[currentState].cover})`,
    backgroundPostion: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  return (
    <div className="container-style">
      <div style={covers} className="bgimgs"></div>
      <div>
        <div className="descriptionl2">
          <h1>{latest[currentState].name.toUpperCase()}</h1>
        </div>
        <div class="playButton pl2">
          <Link to={`/singlepage/${latest[currentState].id}`}>
            <button>
              <div className="img">
                <img src="./images/play-button.png" alt="" />
                <img src="./images/play.png" alt="" className="change" />
              </div>
              <i style={{ textDecoration: "none" }}>WATCH TRAILER</i>
            </button>
          </Link>
        </div>
        <div className="carousel-Container">
          <div className="carousel">
            {latest.map((image, currentState) => (
              <>
                {" "}
                <div className="thumbsContainer">
                  <span
                    key={currentState}
                    onClick={() => goToNext(currentState)}
                    alt=""
                  >
                    <div className="thumbimg-tag">
                      {" "}
                      <img src={image.cover} className="thumbImg" alt="/" />
                    </div>
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest2;

/*                      <div className="row2">
                        <span className="thumbTag">{image.name}</span>
                      </div>*/
