import React from 'react';
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';

export default function Movies({ movies = [], watchList=[], onWatchListButtonClicked }) {
    function renderMovies() {
        if (!movies) {
            return null;
        }

        return movies.map(movie => <Movie key={`episode-${movie.episode_id}`} movie={movie} watchList={watchList} onWatchListButtonClicked={onWatchListButtonClicked} />);
    }
    return (
        <div className={styles.movies}>
            {renderMovies()}
        </div>
    )
}