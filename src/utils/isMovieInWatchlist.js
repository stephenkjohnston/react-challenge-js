export default function isMovieInTheWatchlist(movie = {}, watchList = []) {
    return !!watchList.find(item => item.episode_id === movie.episode_id);
}