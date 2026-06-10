import React from "react";
import "../css/MovieDetail.css";

const TrailerSection = ({ videoKey, loading, error, movieTitle }) => {
  const handleSearchYouTube = () => {
    const searchQuery = encodeURIComponent(`${movieTitle} official trailer`);
    window.open(
      `https://www.youtube.com/results?search_query=${searchQuery}`,
      "_blank"
    );
  };

  return (
    <section className="trailer-section">
      <div className="section-header">
        <h2>Trailer</h2>
      </div>

      {loading ? (
        <p className="empty-message">Loading trailer...</p>
      ) : error ? (
        <p className="empty-message">{error}</p>
      ) : videoKey ? (
        <div className="trailer-embed-wrapper">
          <iframe
            title="Movie Trailer"
            src={`https://www.youtube.com/embed/${videoKey}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="empty-message">
          <p>No trailer available in our database for this movie.</p>
          {movieTitle && (
            <button
              onClick={handleSearchYouTube}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                backgroundColor: "#ff0000",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500"
              }}
            >
              Search on YouTube
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default TrailerSection;