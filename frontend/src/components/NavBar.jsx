import { Link } from "react-router-dom";
import '../css/NavBar.css';
import { Heart, Film, Star, ChevronDown } from 'lucide-react';
import { useMovieContext } from "../context/MovieContext";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
    const { genres, selectedGenre, setSelectedGenre } = useMovieContext();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
        setIsDropdownOpen(false);
    };

    const clearGenreFilter = () => {
        setSelectedGenre(null);
        setIsDropdownOpen(false);
    };


    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="brand-logo">
                <Film size={32} />
                <span className="brand-name">MovieFlix</span>
            </Link>
            <div className="brand-tagline">Your favorite movie companion</div>
        </div>

        <div className="navbar-center">
            <div className="genre-dropdown">
                <button className="dropdown-btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {selectedGenre ? selectedGenre.name : 'All Genres'}
                    <ChevronDown size={16} />
                    
                </button>

                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={clearGenreFilter}>
                            All Genres
                        </button>
                        {genres.map(genre => (
                            <button 
                                key={genre.id}
                                className="dropdown-item"
                                onClick={() => handleGenreSelect(genre)}
                            >
                                {genre.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>

        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favourite" className="nav-link">Favourites</Link>

            <ThemeToggle />

        </div>
    </nav>
}

export default NavBar;