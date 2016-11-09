const API_KEY = "a07e22bc18f5cb106bfe4cc1f83ad8ed"
const URL_PREFIX = "https://api.themoviedb.org/3/movie"
const NOW_PLAYONG_URL = `${URL_PREFIX}/now_playing?api_key=${API_KEY}`

const IMAGE_URI_PREFIX_HIGH = "https://image.tmdb.org/t/p/original"
const IMAGE_URI_PREFIX_LOW = "https://image.tmdb.org/t/p/w45"
export const getPosterUrlHigh = posterPath => `${IMAGE_URI_PREFIX_HIGH}/${posterPath}`
export const getPosterUrlLow = posterPath => `${IMAGE_URI_PREFIX_LOW}/${posterPath}`

export const fetchMovies = () => (
  fetch(NOW_PLAYONG_URL)
    .then((response) => response.json())
    .then((response) => response.results)
    .catch(error => console.error(error))
)
