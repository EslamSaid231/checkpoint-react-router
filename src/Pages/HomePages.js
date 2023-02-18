import React from "react";
import Home from "../Components/Home/Home";

const HomePages = ({ searching }) => {
  return (
    <>
      <div className="HomePage">
        <Home Search={searching} />
      </div>
    </>
  );
};

export default HomePages;
