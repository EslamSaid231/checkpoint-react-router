import React from "react";

import "./SearchBar.css";
const SearchBar = ({ SearchChange }) => {
  const handleChange = (e) => {
    SearchChange(e.target.value);
  };
  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search for a Movie"
      />
    </div>
  );
};

export default SearchBar;
