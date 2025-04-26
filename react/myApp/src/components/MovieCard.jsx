// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>Xem Chi Tiết</Link>
    </div>
  );
};

export default MovieCard;
