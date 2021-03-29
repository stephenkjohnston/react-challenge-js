import React from 'react';
import Movies from 'components/core/Movies';
import styles from './MoviesSection.module.css';

export default function MoviesSection({ title = '', noMoviesLabel = "", movies = [], watchList = [], onWatchListButtonClicked}) {

    function renderMovies() {
        if (!movies.length) {
            return <p>{noMoviesLabel}</p>
        }

        return <Movies movies={movies} watchList={watchList} onWatchListButtonClicked={onWatchListButtonClicked} />;
    }
    return (
        <section className={styles.moviesSection}>
            <h2>{title}</h2>
            {renderMovies()}
        </section>
    )
}