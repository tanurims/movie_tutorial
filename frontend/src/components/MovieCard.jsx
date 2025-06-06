import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
import { getMovieDetails } from "../services/api";
import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import { useNavigate } from "react-router-dom";



function MovieCard({ movie }) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);
    const [movieDetails, setMovieDetails] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const details = await getMovieDetails(movie.id);
                setMovieDetails(details);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [movie.id]);

    const formatRuntime = (minutes) => {
        if (!minutes) return 'N/A';
        
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        
        if (hours === 0) {
            return `${remainingMinutes}m`;
        } else if (remainingMinutes === 0) {
            return `${hours}h`;
        } else {
            return `${hours}h ${remainingMinutes}m`;
        }
    };


    function onFavouriteClick(e) {
        e.preventDefault()
        e.stopPropagation(); // Prevent the card click when clicking favorite
        if(favorite){
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    /*function onCardClick(){
        setShowDetails(true);
    }
    function closeDetails(){
        setShowDetails(false);
    }*/

    function onCardClick(){
        navigate(`/movie/${movie.id}`);  // Navigate to the movie details page
    }

  return <div className="movie-card" onClick={onCardClick}>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}>
                ♥
                </button>
            </div>

        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>

            <p>Duration: {movieDetails?.runtime ? formatRuntime(movieDetails.runtime) : 'Loading...'}</p>

        </div>

       

  </div>

}

export default MovieCard;