import React from "react";
import Slider from "react-slick";
import { trending } from "../../dummyData";

import "./Trending.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingCard from "./TrendingCard";
import { useParams } from "react-router-dom";

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
const Trending = () => {
  const { id } = useParams();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePrevArrow />,
  };
  return (
    <div className="home">
      <div className="homeContainer">
        <Slider {...settings}>
          {trending.map((Movie) => (
            <TrendingCard key={Movie.id} item={Movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trending;
