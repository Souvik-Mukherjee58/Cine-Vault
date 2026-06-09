import  "../css/Home.css";
import "../css/Favourites.css";
import MovieCard from "../components/MovieCard";
import {useMovieContext} from "../contexts/MovieContext";

function Favourites() {
    const {favourites} = useMovieContext();

    if(favourites?.length > 0){ return(
        <div className="favourites">
            <h2>Your Favourites</h2>
            <div className="movies-grid">
            {favourites.map((movie)=>
                <MovieCard movie={movie} key={movie.id} />
           )}</div>
        </div>)}

    
    return (
        <div className="favourites-empty">
            <h2>Your favourites list is empty</h2>
            <p>Add some favourite movies to see them here!</p>
        </div>
    )
}

export default Favourites;