import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePages from "./Pages/HomePages";
import TrendingPage from "./Pages/TrendingPage";
import LatestPage from "./Pages/LatestPage";
import UserLogin from "./Components/UserLogin/UserLogin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path=":id" element={<TrendingPage />} />
        <Route path="latest" element={<LatestPage />} />
        <Route path="user" element={<UserLogin />} />
      </Routes>
    </div>
  );
}

export default App;

/*  const [query, setquery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  setFilteredMovies(() => {
    if (query.length === 0) {
      return setFilteredMovies(homeData);
    } else {
      return homeData.filter((Movies) =>
        Movies.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  });
  console.log(filteredMovies);
  
  
   onQuery={setquery}*/
