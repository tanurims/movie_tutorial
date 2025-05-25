
import './css/App.css';
import MovieCard from './components/MovieCard'
import Favourite from './pages/Favourites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const movieNumber = 1;

  

  return (
  <>
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />


        </Routes> 
      </main>
    </div>
  </>
  )
  
}



export default App
