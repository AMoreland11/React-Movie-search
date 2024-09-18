import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SearchIcon from './assets/search.svg';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


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
        
  return (
    <div className='app'>
      <Navbar />
      <div className='app__container'>
        <h1>Movie Search</h1>
        <div className='search'>
          <input 
            placeholder='"Search for movies"'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <img 
            src={SearchIcon}
            alt='search'
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => ( 
                <Search key={movie.imdbID} movie={movie} />
              ))}
            </div>
            ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
        }
      </div>
    </div>
  );
}
export default App;
