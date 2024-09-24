import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SearchIcon from './assets/search.svg';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MovieDetails from './components/MovieDetails';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');


  async function fetchMovieDetails(imdbID) {
    const URL = `https://www.omdbapi.com/?i=${imdbID}&apikey=9a8004ec`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    return data;
  }

  async function searchMovies(searchTerm) {
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=9a8004ec`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    if (data.Response === "True"){
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie) => {
          const detailedMovie = await fetchMovieDetails(movie.imdbID);
          return detailedMovie;
        })
      );
      setMovies(detailedMovies);
    }

    console.log(data.Search)
  }


  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
        
  // Adding sort a-z
  
  const sortedMovies = movies.sort((a, b) => {
    if (sortOrder === 'A-Z') {
      return a.Title.localeCompare(b.Title);
    } else {
      return b.Title.localeCompare(a.Title);
    }
  });


  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className='app__container'>
              <h1>Movie Search</h1>
              <div className='search'>
                <input 
                  placeholder='"Search for movies"'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      searchMovies(searchTerm);
                    }
                  }} 
                />
                <img 
                  src={SearchIcon}
                  alt='search'
                  onClick={() => searchMovies(searchTerm)}
                />
              </div>
              <div className='sort-buttons'>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="A-Z">Sort A-Z</option>
                  <option value="Z-A">Sort Z-A</option>
                </select>
              </div>
              {sortedMovies?.length > 0
                ? (
                  <div className='container'>
                    {sortedMovies.map((movie) => ( 
                      <div key={movie.imdbID}>
                        <Link to={`/movie/${movie.imdbID}`}>
                          <Search key={movie.imdbID} movie={movie} />
                        </Link>
                      </div>
                    ))}
                  </div>
                  ) : (
                  <div className='empty'>
                    <h2>No movies found</h2>
                  </div>
                )
              }
            </div>
          } />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
