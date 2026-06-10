const BASE_URL = "https://movie-website-ekxt.onrender.com";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/popular`);
    const data = await response.json();
    return data;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search?query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data;
};

export const getMovieTrailer = async (id) => {
    const response = await fetch(`${BASE_URL}/trailer/${id}`);
    const data = await response.json();
    return data?.key || null;
};

export const getMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}`);
    const data = await response.json();
    return data;
};

