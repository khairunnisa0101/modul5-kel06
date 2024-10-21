import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Movie</Link></li>
            <li><Link to="/book">Book</Link></li> {/* Tambahkan link ke halaman Book */}
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to our website!</h1>
        <p>kelompok06</p>
      </section>

      <footer>
        <p>&copy; 2023 Our Website</p>
      </footer>
    </div>
  );
};

export default Home;