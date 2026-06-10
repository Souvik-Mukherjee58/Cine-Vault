import React from "react";
import "../css/MovieCard.css";
import toast from "react-hot-toast";
import { useMovieContext } from "../contexts/MovieContext";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const {isFavourite, addToFavourites, removeFromFavourites}=useMovieContext();
  const favourite=isFavourite(movie.id);
  const navigate = useNavigate();

  function onFavouriteClick() {
    if (favourite) {
      removeFromFavourites(movie.id);
      toast.success("Movie removed from favourites!");
    } else {
      addToFavourites(movie);
      toast.success("Movie added to favourites!");
    }
  }

  return (
    <div
      className="movie-card"
      onClick={() =>
        navigate(`/movie/${movie.id}`, { state: { movieTitle: movie.title } })
      }
    >
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favourite ? "active" : ""}`}
            onClick={(e) => {
            e.stopPropagation();
            onFavouriteClick();}}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;