
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr-FR`,
    fetchTopRated: `${BASE_URL}/movie/top_rated/?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=fr-FR`,
    fetchComedyMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=fr-FR`,
    fetchHorrorMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=fr-FR`,
    fetchRomanceMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=fr-FR`,
    fetchAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&language=fr-FR`
}

export default requests;