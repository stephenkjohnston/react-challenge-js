import React from 'react';
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';

export default function Movies({ movies = [], onClickMovie }) {
    function renderMovies() {
        if (!movies) {
            return null;
        }

        return movies.map(movie => <Movie key={`episode-${movie.episode_id}`} movie={movie} onClickMovie={onClickMovie} />);
    }
    return (
        <div className={styles.movies}>
            {renderMovies()}
        </div>
    )
}