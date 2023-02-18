import React from "react";

const SearchBar = ({ SearchChange }) => {
  const handleInput = (e) => {
    SearchChange(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleInput} />
    </div>
  );
};

export default SearchBar;
