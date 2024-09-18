import React from 'react'

const Search = ({ movie : { imdbID, Year, Poster, Title, Type, Rated, Genre } }) => {
 
  return (
    <div className="movie" >
      <div>
        <p>{Year}</p>
        <p>Rated: {Rated}</p>
        <p>Genre: {Genre}</p>
      </div>
      <div>
        <img src={Poster !== 'N/A' ? Poster : "./assets/image_not_found.png"}  alt={Title} />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  )
}

export default Search
