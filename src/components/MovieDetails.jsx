import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../components/MovieDetails.css";

function MovieDetails() {
  const { imdbID } = useParams();  // Get the imdbID from the route params
  const [movie, setMovie] = useState(null);

  // Fetch movie details using the imdbID
  useEffect(() => {
    async function fetchMovieDetails() {
      const URL = `https://www.omdbapi.com/?i=${imdbID}&apikey=9a8004ec`;
      const res = await fetch(URL);
      const data = await res.json();
      setMovie(data);
    }

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details__container">
        <div className='movie__header'>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className='movie__details-container'>
            <div className='movie__details-title'>
                <h1>{movie.Title}</h1>
                <p>{movie.Plot}</p>
            </div>
            <div className='movie__info'>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p> 
            </div>
        </div>
    </div>
  );
}

export default MovieDetails;
