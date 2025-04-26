// src/pages/HomePage.jsx
import React from 'react';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const movies = [
    {
      id: 1,
      title: 'Tiên Nghịch',
      imageUrl: '/images/tien_nghich.png',  // Đảm bảo đường dẫn đúng
    },
    {
      id: 2,
      title: 'Date A Live V',
      imageUrl: '/images/DateAlive.png',  // Đảm bảo đường dẫn đúng
    },
    {
      id: 3,
      title: 'Yugioh 5DS',
      imageUrl: '/images/yugioh_5ds.png',  // Đảm bảo đường dẫn đúng
    },
    {
      id: 4,
      title: 'Tokyo Ghoul',
      imageUrl: '/images/tokyo_ghoul.png',  // Đảm bảo đường dẫn đúng
    },
    {
      id: 5,
      title: 'Black Clover',
      imageUrl: '/images/black_clover.png',  // Đảm bảo đường dẫn đúng
    },
    {
      id: 6,
      title: 'Naruto The Last',
      imageUrl: '/images/naruto_the_last.png',  // Đảm bảo đường dẫn đúng
    },
  ];

  return (
    <div>
      <h1>Trang Chủ</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
