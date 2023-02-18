import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { homeData } from "../../dummyData";
import HomeCard from "./HomeCard";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const Home = ({ Search }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePrevArrow />,
  };
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    let tempArray = [];

    if (Search.length > 0) {
      tempArray = [
        ...homeData.filter((Movie) =>
          Movie.name.toLowerCase().includes(Search.toLowerCase())
        ),
      ];
      console.log(tempArray);
    }
    if (tempArray.length) {
      setFilteredMovies(tempArray);
    } else {
      setFilteredMovies(homeData);
    }
  }, [Search]);
  return (
    <div className="home">
      <div className="homeContainer">
        <Slider {...settings}>
          {filteredMovies.map((Movie) => (
            <HomeCard key={Movie.id} item={Movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
