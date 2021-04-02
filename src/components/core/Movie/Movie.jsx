import React, { useCallback, useEffect, useState } from 'react';
import isMovieInTheWatchlist from 'utils/isMovieInWatchlist';
import styles from './Movie.module.css';

export default function Movie({ movie = [], onClickMovie }) {

    const onMovieClicked = useCallback(() => {
        if (typeof onClickMovie === 'function') {
            onClickMovie(movie);
        }
    },[movie]);

    const isInWatchList = false;
    return (
        <div className={styles.movie}>
            <img className={styles.moviePoster} src={`/images/starwars_episode_0${movie.episode_id}.jpg`} />
            <button
                className={styles.movieWatchlistButton}
                aria-pressed={isInWatchList}
                aria-label={`${!isInWatchList ? 'Add' : 'Remove'} the current title to your Watchlist`}
                onClick={() => {}}
            >
                <span className={styles.horizontal}></span>
                <span className={styles.vertical}></span>
            </button>
        </div>
    )
}