import {useState, useEffect} from 'react'
import{useParams, useNavigate} from 'react-router-dom'
import "../css/MovieDetails.css"
import { useMovieContext } from '../context/MovieContext'  
import { getMovieDetails, getMovieCast } from '../services/api'

function MovieDetails(){
    const { id } = useParams(); // Get movie ID from URL
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);
    const[cast, setCast] = useState([]);
    const[loading, setLoading] = useState(false);
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

    const favorite = isFavorite(parseInt(id));

    useEffect(()=>{
        
            fetchMovieDetails();
        
    }, [id]);

    const fetchMovieDetails = async () => {
        setLoading(true);
        try {
            const details = await getMovieDetails(id);
            setMovieDetails(details);

            const castData = await getMovieCast(id);
            setCast(castData); 
        } catch (error) {
            console.error("Error fetching movie details:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFavoriteClick = () => {
    if (favorite) {
      removeFromFavorites(parseInt(id));
    } else {
      addToFavorites(movieDetails);
    }
  };

  const handleBackClick = () => {
        navigate(-1); // Go back to previous page
    };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

     if (loading) {
        return (
            <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading movie details...</p>
            </div>
        );
    }

    if (!movieDetails) {
        return <div>Movie not found</div>;
    }


    return(
        <div className="movie-details-overlay" >
            <div className="movie-details-modal" >
                <button className="close-btn" onClick={handleBackClick}>
                    ×
                </button>

                
                
                        <div className="movie-details-content">
                            <div className="details-header">
                                <div className="backdrop-container">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
                                        alt={movieDetails.title}
                                        className="backdrop-image"
                                    />
                                    <div className="backdrop-overlay"></div>
                            
                                </div>

                                <div className="header-content">
                                    <div className="poster-section">
                                         <img
                                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                                            alt={movieDetails.title}
                                            className="details-poster"
                                        />
                                    </div>

                                    <div className="movie-main-info">
                                        <h1 className="movie-title">{movieDetails.title}</h1>
                                        <div className="movie-meta">
                                            <span className="release-year">
                                                {movieDetails.release_date?.split("-")[0]}
                                            </span>
                                            <span className="separator">•</span>
                                            <span className="runtime">
                                                {formatRuntime(movieDetails.runtime)}
                                            </span>
                                            <span className="separator">•</span>
                                            <span className="rating">{movieDetails.vote_average}/10</span>
                                        </div>

                                        <div className="genres">
                                            {movieDetails.genres?.map((genre) => (
                                                <span className="genre-tag" key={genre.id}>
                                                    {genre.name}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="action-button">
                                            <button
                                                className={`favorite-button ${favorite ? "active" : ""}`}
                                                onClick={handleFavoriteClick}
                                            >
                                                <span className="heart">♥</span>
                                                {favorite ? "Remove from Favorites" : "Add to Favorites"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="details-body">
                                <div className="section">
                                    <h2>Overview</h2>
                                    <p className="overview">{movieDetails.overview}</p>
                                </div>

                                <div className="section">
                                    
                                    <h2>Main Cast</h2>
                                    <div className="cast-grid">
                                        {cast.filter(actor => actor.order < 10).map((actor)=>(
                                            <div className="cast-member" key={actor.id}>
                                                <div className="actor-photo">
                                                    {actor.profile_path ? (
                                                        <img
                                                            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                                                            alt={actor.name}
                                                        />
                                                    ): (
                                                        <div className="no-photo">
                                                            <span>👤</span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="actor-info">
                                                    <p className="actor-name">{actor.name}</p>
                                                    <p className="character-name">{actor.character}</p>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="section">
                                    <h2>Details</h2>
                                    <div className="movie-stats">
                                        <div className="stat-item">
                                            <span className="stat-label">Budget</span>
                                            <span className="stat-value">
                                                {movieDetails.budget ? formatCurrency(movieDetails.budget) : "N/A"}
                                            </span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Revenue</span>
                                            <span className="stat-value">
                                                {movieDetails.revenue ? formatCurrency(movieDetails.revenue) : "N/A"}
                                            </span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Status</span>
                                            <span className="stat-value">
                                                {movieDetails.status}
                                            </span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Original Language</span>
                                            <span className="stat-value">
                                                {movieDetails.original_language?.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {movieDetails.production_companies?.length > 0 && (
                                     <div className="section">
                                        <h2>Production Companies</h2>
                                        <div className="production-companies">
                                        {movieDetails.production_companies.map((company) => (
                                            <div key={company.id} className="company">
                                            {company.logo_path && (
                                                <img
                                                src={`https://image.tmdb.org/t/p/w185${company.logo_path}`}
                                                alt={company.name}
                                                className="company-logo"
                                                />
                                            )}
                                            <span className="company-name">{company.name}</span>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                )}


                            </div>
                        </div>
                    
                
            </div>
        </div>
    );


   

    
    

}

export default MovieDetails;