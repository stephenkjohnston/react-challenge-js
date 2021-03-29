import React from 'react';
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
  // Have state for all movies ([])
  // Have state for all movies in the watch list ([])

  // Fetch the movies from http://location:3000/api/v1/movies.

  // Help customers add movies to their watch list
  // Help customers remove movies from their watch list

  return (
    <>
      <MoviesSection
        title="Movies"
        movies={[]}
        watchList={[]}
        noMoviesLabel="Loading awesome movies to feed your watchlist..."
        onWatchListButtonClicked={(movie) => console.log({ movie })} 
      />
      <MoviesSection
        title="Watchlist"
        movies={[]}
        watchList={[]}
        noMoviesLabel="Your watchlist is feeling lonely."
        onWatchListButtonClicked={(movie) => console.log({ movie })} 
      />
    </>
  );
}
