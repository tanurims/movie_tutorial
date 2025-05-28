import MovieCard from "../components/MovieCard";
import { useState , useEffect} from "react";
import '../css/Home.css';
import { searchMovies, getPopularMovies, getMoviesByGenre} from "../services/api";
import { useMovieContext } from "../context/MovieContext";

function Home() {
    const[searchQuery, setSearchQuery] = useState("");

    //stop rendering the page when the component is mounted
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const[loading, setLoading] = useState(true);
    const{selectedGenre} = useMovieContext();

    //useEffect to fetch movies by genre when the component mounts
    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                let movieData;
                if (selectedGenre) {
                    movieData = await getMoviesByGenre(selectedGenre.id);
                } else if (searchQuery) {
                    movieData = await searchMovies(searchQuery);
                } else {
                    movieData = await getPopularMovies();
                }
                setMovies(movieData);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [selectedGenre, searchQuery]);


    //useEffect to fetch popular movies when the component mounts
   /*useEffect(() => {
       const loadPopularMovies = async () => {
         try{
                const PopularMovies= await getPopularMovies()
                setMovies(PopularMovies);
            } catch(err){
                console.log(err);
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);*/


    const handleSearch = async (e) => {
        //prevent refresh the form
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null) 
        } catch(err) {
            console.log(err);
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
        
        
    };

    if (loading) {
        return <div className="loading">Loading movies...</div>;
    }


    return <div className="home">
        <h2 className="title">Popular Movies</h2>
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {loading ? <div className="loading">Loading...</div> : 
        
        <div className="movies-grid">
            {movies.map((movie) =>
                //search
                //movie.title.toLowerCase().startsWith(searchQuery) && 
                (
                    <MovieCard movie={movie} key={movie.id}/>
                )
            )}
        </div>
        }
    </div>
}

export default Home;