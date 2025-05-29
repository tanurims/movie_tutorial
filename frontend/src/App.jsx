import './css/App.css';
import MovieCard from './components/MovieCard'
import Favourite from './pages/Favourites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { MovieProvider } from './context/MovieContext';
import { Movie } from '@mui/icons-material';
import MovieDetails from './components/MovieDetails';

function App() {
  const movieNumber = 1;

  

  return (
  <>
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/movie/:id" element={<MovieDetails />} />


        </Routes> 
      </main>
    </MovieProvider>
    <Footer />
  </>
  )
  
}



export default App
