import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SmapleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn2" onClick={onClick}>
      <button className="next2">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};
const SmaplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn2" onClick={onClick}>
      <button className="prev2">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};
const SearchResults = ({ searching, trying }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {searching.map((Movie) => (
          <Link to={`/singlepage/${Movie.id}`}>
            <div className="result grow" key={Movie.id}>
              <img src={Movie.cover} alt="/" />
              <div className="SearchTitle">
                <h3>{Movie.name.toUpperCase()}</h3>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SearchResults;
