import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trending from './pages/Trending';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import Login from './pages/Login';  // Import Login page

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();  // Get the current route/location

  useEffect(() => {
    // Check if the user is logged in (using localStorage for simplicity)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  // Check if the current route is the login page to hide the navbar
  const shouldHideNavbar = location.pathname === '/login';

  return (
    <div style={{ paddingBottom: '60px' }}> {/* Giving space so that content is not hidden behind navbar */}
      {!shouldHideNavbar && <Navbar />}  {/* Only show Navbar if not on the login page */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/trending" element={isLoggedIn ? <Trending /> : <Navigate to="/login" />} />
        <Route path="/movie/:movieId" element={isLoggedIn ? <MovieDetails /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
