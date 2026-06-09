import './css/App.css'
import Favourites from './pages/Favourites'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import MovieDetails from "./pages/MovieDetails";

function App() {

  return (
    <MovieProvider>
        <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;