
import './css/App.css';
import MovieCard from './components/MovieCard'
import Favourite from './pages/Favourites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';
import { Movie } from '@mui/icons-material';

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


        </Routes> 
      </main>
    </MovieProvider>
  </>
  )
  
}



export default App
