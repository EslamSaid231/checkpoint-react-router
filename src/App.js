import "./App.css";
import Container from "./Container/Container";

function App() {
  return (
    <div className="App">
      <Container />
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
