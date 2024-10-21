import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // Data yang sama dengan yang ada di Movie.js
  const poster = [
    {
        title: "John Wick", id: 1,
        rate: 4,
        genre: "action, crime",
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
    },
    {
        title: "John Wick", id: 2,
        rate: 4,
        genre: "action, crime",
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
    },
    {
        title: "John Wick", id: 3,
        rate: 4,
        genre: "action, crime",
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
    },
];

const data = [
    {
        title: "Oppenheimer", id: 3,
        rate: 4,
        genre: "biography, drama, history",
        img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
        title: "Oppenheimer", id: 4,
        rate: 4,
        genre: "biography, drama, history",
        img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
        title: "Oppenheimer", id: 5,
        rate: 4,
        genre: "biography, drama, history",
        img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
        title: "Oppenheimer", id: 6,
        rate: 4,
        genre: "biography, drama, history",
        img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
        title: "Oppenheimer", id: 7,
        rate: 4,
        genre: "biography, drama, history",
        img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
        title: "Oppenheimer", id: 8,
        rate: 4,
        genre: "biography, drama, history",
        img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
];

  useEffect(() => {
    const fetchMovie = () => {
      const allMovies = [...poster, ...data];
      const selectedMovie = allMovies.find(m => m.id === parseInt(id));
      setMovie(selectedMovie);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <div className="movie-poster">
        <img src={movie.img} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Rating:</strong> {movie.rate} / 5</p>
        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default Detail;