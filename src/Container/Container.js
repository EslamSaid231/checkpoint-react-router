import "../App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import HomePages from "../Pages/HomePages";
import TrendingPage from "../Pages/TrendingPage";
import LatestPage from "../Pages/LatestPage";
import UserLogin from "../Components/UserLogin/UserLogin";
import { useState } from "react";
import SearchComponent from "../Components/SearchBar/SearchComponent";

function Container() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <Navbar onQuery={setQuery} />
      <Routes>
        <Route path="/" element={<HomePages searching={query} />} />
        <Route path=":id" element={<TrendingPage />} />
        <Route path="latest" element={<LatestPage />} />
        <Route path="user" element={<UserLogin />} />
        <Route path="Pages" element={<SearchComponent />} />
      </Routes>
    </div>
  );
}

export default Container;
