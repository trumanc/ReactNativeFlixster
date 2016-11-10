const API_KEY = "a07e22bc18f5cb106bfe4cc1f83ad8ed"
const URL_PREFIX = "https://api.themoviedb.org/3/movie"
export const NOW_PLAYING_URL = `${URL_PREFIX}/now_playing?api_key=${API_KEY}`
export const TOP_RATED_URL = `${URL_PREFIX}/top_rated?api_key=${API_KEY}`

const IMAGE_URI_PREFIX_HIGH = "https://image.tmdb.org/t/p/original"
const IMAGE_URI_PREFIX_LOW = "https://image.tmdb.org/t/p/w45"
export const getImageUrlHigh = imagePath => `${IMAGE_URI_PREFIX_HIGH}/${imagePath}`
export const getImageUrlLow = imagePath => `${IMAGE_URI_PREFIX_LOW}/${imagePath}`


export const fetchMovies = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((response) => response.results)
)
