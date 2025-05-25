import MovieCard from "../components/MovieCard";
import { useState , useEffect} from "react";
import '../css/Home.css';
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const[searchQuery, setSearchQuery] = useState("");

    //stop rendering the page when the component is mounted
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
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
    }, []);


    const handleSearch = (e) => {
        //prevent refresh the form
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };


    return <div className="home">
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