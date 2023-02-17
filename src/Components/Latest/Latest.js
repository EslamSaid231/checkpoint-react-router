import React from "react";
import Slider from "react-slick";
import { latest } from "../../dummyData";

import "./Latest.css";
import LatestCard from "./LatestCard";

const SmapleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};
const SmaplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};
const Latest = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePrevArrow />,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="latest">
      <div className="latestContainer">
        <Slider {...settings}>
          {latest.map((Movie) => (
            <>
              <LatestCard key={Movie.id} item={Movie} />
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Latest;
