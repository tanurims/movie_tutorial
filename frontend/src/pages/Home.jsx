import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const[searchQuery, setSearchQuery] = useState("");

    const movies=[
        {id:1, title:"Movie1" ,release_date: "2020"},
        {id:2, title:"Movie2" ,release_date: "1987"},
        {id:3, title:"Movie3" ,release_date: "2001"},
        {id:4, title:"Movie4" ,release_date: "2020"},


    ];

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

        <div className="movies-grid">
            {movies.map((movie) =>
                //search
                //movie.title.toLowerCase().startsWith(searchQuery) && 
                (
                    <MovieCard movie={movie} key={movie.id}/>
                )
            )}
        </div>
    </div>
}

export default Home;