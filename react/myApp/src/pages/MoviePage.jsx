// src/pages/MoviePage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './MoviePage.css';  // Đừng quên tạo CSS để trang đẹp hơn

const MoviePage = () => {
  const { category } = useParams(); // Lấy thể loại từ URL

  // Dữ liệu phim giả lập theo thể loại
  const movies = {
    fantasy: [
      { id: 1, title: 'Tiên Nghịch', imageUrl: '/images/tien_nghich.png' },
      { id: 5, title: 'Black Clover', imageUrl: '/images/black_clover.png' },
      { id: 6, title: 'Naruto The Last', imageUrl: '/images/naruto_the_last.png' },
    ],
    horror: [
      { id: 4, title: 'Tokyo Ghoul', imageUrl: '/images/tokyo_ghoul.png' },
      { id: 2, title: 'Date A Live V', imageUrl: '/images/DateAlive.png' },
    ],
    tactics: [
      { id: 3, title: 'Yugioh 5DS', imageUrl: '/images/yugioh_5ds.png' },
    ],
  };

  // Lấy danh sách phim theo thể loại
  const movieList = movies[category] || [];

  return (
    <div className="movie-page">
      <h2>Danh sách phim thể loại "{category}"</h2>
      <div className="movie-grid">
        {movieList.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img 
              src={movie.imageUrl || '/images/default_movie.png'}  // Hình ảnh mặc định nếu không có imageUrl
              alt={movie.title}
              className="movie-image" 
            />
            <div className="movie-title">{movie.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
