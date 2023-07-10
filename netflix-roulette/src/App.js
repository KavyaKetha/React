import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieSearch from './MovieSearch';
import MovieDetails from './MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            NetflixRoulette
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;