import React, { useEffect, useState } from 'react';
import MoviesSection from "components/shared/MoviesSection/MoviesSection";
import "./styles.css";

/**
 * Remember, this is not a pass or fail challenge, and if you will
 * get up to 24 hours to complete it. The idea is to make as much
 * progress as possible in 20 minutes or less.
 * 
 * (optional) If time permits within the 24 hour time
 * frame show us what you got by "improving"
 * this application. This is an optional step and will NOT
 * affect the hiring process.
 */

export default function App() {
  // Have a way to store all movies
  // Have a way to store all movies in the watch list

  // Fetch the movies from https://swapi.dev/api/films/.

  // Help customers add movies to their watch list
  // Help customers remove movies from their watch list
  
  return (
    <>
      <MoviesSection
        title="Movies"
        movies={[]}
        noMoviesLabel="🎥🎥 Where are the original movies?"
        onClickMovie={(movie) => console.log({ movie })} 
      />
      <MoviesSection
        title="Watchlist"
        movies={[]}
        noMoviesLabel="🍿🍿 How will you binge with nothing to binge?"
        onClickMovie={(movie) => console.log({ movie })} 
      />
    </>
  );
}
