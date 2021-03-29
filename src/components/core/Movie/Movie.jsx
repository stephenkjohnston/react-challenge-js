import React, { useCallback, useEffect, useState } from 'react';
import isMovieInTheWatchlist from 'utils/isMovieInWatchlist';
import styles from './Movie.module.css';

export default function Movie({ movie = [], watchList = [], onWatchListButtonClicked }) {
    const [isInWatchList, setIsInWatchList] = useState(false);

    const onClickWatchListButton = useCallback(() => {
        if (typeof onWatchListButtonClicked === 'function') {
            onWatchListButtonClicked(movie);
        }
    },[movie]);

    useEffect(() => {
        if (isMovieInTheWatchlist(movie, watchList)) {
            setIsInWatchList(true);
        }
    },[movie, watchList])

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