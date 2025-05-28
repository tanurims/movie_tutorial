import { Link } from "react-router-dom";
import '../css/NavBar.css';
import { Heart, Film, Star } from 'lucide-react';

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="brand-logo">
                <Film size={32} />
                <span className="brand-name">MovieFlix</span>
            </Link>
            <div className="brand-tagline">Your favorite movie companion</div>
        </div>

        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favourite" className="nav-link">Favourites</Link>
        </div>
    </nav>
}

export default NavBar;