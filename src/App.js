import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { MdMovie } from 'react-icons/md';
import { FaBook } from 'react-icons/fa';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import Book from './pages/Book';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <p id="titleGroup">Kelompok 06</p>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Movie />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <footer>
          <NavLink to="/home" className="iconWrapper">
            <HiHome className="icon" /> Home
          </NavLink>
          <NavLink to="/" className="iconWrapper">
            <MdMovie className="icon" /> Movie
          </NavLink>
          <NavLink to="/book" className="iconWrapper">
            <FaBook className="icon" /> Book
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;