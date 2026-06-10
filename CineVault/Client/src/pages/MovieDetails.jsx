import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieTrailer } from "../services/api";
import TrailerSection from "../components/TrailerSection";

function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    
    if (location.state?.movieTitle) {
      setMovieTitle(location.state.movieTitle);
    }
  }, [location.state]);

  useEffect(() => {
    async function loadTrailer() {
      try {
        setLoading(true);
        setError(null);
        const trailerKey = await getMovieTrailer(id);
        setVideoKey(trailerKey);
      } catch (err) {
        console.error("Error loading trailer:", err);
        setError("Failed to load trailer");
      } finally {
        setLoading(false);
      }
    }

    loadTrailer();
  }, [id]);

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        const { getMovieDetails } = await import("../services/api");
        const details = await getMovieDetails(id);
        setMovieDetails(details);
      } catch (err) {
        console.error("Error loading movie details:", err);
      }
    }

    loadMovieDetails();
  }, [id]);

  return (
    <div className="movie-details">
      <TrailerSection
        videoKey={videoKey}
        loading={loading}
        error={error}
        movieTitle={movieTitle}
      />
      {movieDetails && (
        <section className="movie-info-section">
          <div className="movie-header">
            <h1>{movieDetails.title}</h1>
            <div className="movie-meta">
              <span className="rating">⭐ {movieDetails.vote_average?.toFixed(1)}/10</span>
              <span className="year">{movieDetails.release_date?.split("-")[0]}</span>
              {movieDetails.runtime && (
                <span className="runtime">{movieDetails.runtime} min</span>
              )}
            </div>
          </div>

          <div className="movie-overview">
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
          </div>

          {movieDetails.genres && movieDetails.genres.length > 0 && (
            <div className="movie-genres">
              <h3>Genres</h3>
              <div className="genres-list">
                {movieDetails.genres.map((genre) => (
                  <span key={genre.id} className="genre-tag">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default MovieDetails;