import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/images/logo.png";
import SearchComponent from "../SearchBar/SearchComponent";
const Navbar = ({ onQuery }) => {
  const [Mobile, setMobile] = useState(false);
  const [user, setUser] = useState(false);
  const [searchPanel, setSearchPanel] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="navbar">
        <div className="linksContainer">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={Mobile ? "MobileLinks" : "links"}>
            <Link to="/">Home</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/latest">Latest</Link>
            <Link to="/">Pages</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="usercontrols">
          <i
            className="fa fa-search"
            onClick={() => {
              setSearchPanel(!searchPanel);
            }}
          ></i>
          <div className={searchPanel ? "Searchpanel" : "hideSearch"}>
            <SearchComponent SearchChange={setQuery} />
          </div>
          <i
            className="fa fa-user"
            onClick={() => {
              setUser(!user);
            }}
          >
            <div className={user ? "userpanelShow" : "userpanelHide"}>
              <Link to="/user">Sign up</Link>
              <Link to="/user">Sign In</Link>
            </div>
          </i>
          <i className="fa fa-bell"></i>
          <i
            className="fa fa-bars Mobile"
            onClick={() => {
              setMobile(!Mobile);
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;

/*<SearchBar SearchChange={onQuery} />*/
