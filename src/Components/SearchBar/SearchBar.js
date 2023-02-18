import React from "react";

const SearchBar = ({ SearchChange }) => {
  const handleChange = (e) => {
    SearchChange(e.target.value);
    console.log(SearchChange);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
