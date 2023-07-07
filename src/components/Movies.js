import React from "react";
import { movies } from "../data";

console.log(movies)
function Movies() {
  const moviesItems = movies.map(movie =>(
    <div key={movie.title}>
    <h2>{movie.title}</h2>
    <h3>Time: {movie.time}</h3>
    <ul>
    {movie.genres.map(genre =>(
        <li key={genre}>{genre}</li>
    ))}
    </ul>
    </div>
  ))


  return( 
    <div>
      <h1>Movies Page</h1>
      {moviesItems}
    </div>
  )
}

export default Movies;
