import '../css/Favorites.css'
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {

    const { favorites } = useMovieContext();

    if (favorites) {
      return (
        <div className="favorites">
          <h2>Your Favorites</h2>
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      );
    }


    return <div className="favorite-empty">
<h2>No Favorites Yet</h2>
<p>Start Adding Movies To Your Favorites And They Will Appear</p>
    </div>
}

export default Favorites