import React, { useState, useLayoutEffect } from "react";
import SearchBar from "./SearchBar";
import "./SearchComponent.css";
import "tachyons";
import { homeDataAll } from "../../dummydataAll";
import SearchResults from "./SearchResults";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  useLayoutEffect(() => {
    if (query.length <= 0) {
      return setSearchFilter([]);
    } else {
      const filtering = homeDataAll.filter((mov) => {
        return mov.name.toLowerCase().includes(query.toLowerCase());
      });
      setSearchFilter(filtering);
    }
  }, [query]);

  return (
    <>
      <div className="SearchComponent">
        <div className="SearchContainer">
          <SearchBar SearchChange={setQuery} />
          <div className="MoviesResult">
            {query.length > 0 ? (
              <SearchResults searching={searchFilter} queryValue={query} />
            ) : (
              <div className="noRes">
                <p className="noRes-text">No Results Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
