// src/pages/MovieDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams(); // Lấy ID từ URL

  // Dữ liệu phim (có thể lấy từ API hoặc mảng)
  const movies = [
    {
      id: 1,
      title: 'Tiên Nghịch',
      imageUrl: '/images/tien_nghich.png',
      description: 'Một bộ phim về hành trình của Tiên Nghịch.',
      genre: 'Phép thuật',
      year: 2022,
      episodes: 182,
      videoUrl: 'https://www.youtube.com/embed/MYz3qgg5g9A?list=PLJKFdztrzjpXB7PSeIfb-8KSK6ZzqY1pI',
    },
    {
      id: 2,
      title: 'Date A Live V',
      imageUrl: '/images/DateAlive.png',
      description: 'Phần mới nhất của Date A Live.',
      genre: 'Phép thuật',
      year: 2024,
      episodes: 12,
      videoUrl: 'https://www.youtube.com/embed/-EFaRJBQMfg?list=PLwLSw1_eDZl24IchKz3a3eAcwPorGjU_t',
    },
    {
      id: 3,
      title: 'Yugioh 5DS',
      imageUrl: '/images/yugioh_5ds.png',
      description: 'Phần thứ 3 của series Yugioh.',
      genre: 'chiến thuật',
      year: 2007,
      episodes: 160,
      videoUrl: 'https://www.youtube.com/embed/bvHfE9pvbjU?list=PL_C7TzOfm0F2qPiCFiWwPBp7Mzmz2neQ_',
    },
    {
      id: 4,
      title: 'Tokyo Ghoul',
      imageUrl: '/images/tokyo_ghoul.png',
      description: 'Bộ phim kể về một loài sinh vật có tên Ghoul săn con người để làm thức ăn.',
      genre: 'Kinh dị',
      year: 2017,
      episodes: 60,
      videoUrl: 'https://www.youtube.com/embed/UlmDBZrL17o',
    },
    {
      id: 5,
      title: 'Black Clover',
      imageUrl: '/images/black_clover.png',
      description: 'Kể về 1 cậu bé tại 1 ngôi làng sinh ra khi trong người không có ma pháp cậu bị mọi người coi thường.',
      genre: 'Phép thuật',
      year: 2017,
      episodes: 170,
      videoUrl: 'https://www.youtube.com/embed/Hc4fA2n7GFQ',
    },
    {
      id: 6,
      title: 'Naruto The Last',
      imageUrl: '/images/tokyo_ghoul.png',
      description: 'Cốt truyện nối tiếp trong cốt truyện chính sau khi kết thúc đại chiến nhẫn giả lần thứ 4 và Naruto trở thành Hokage.',
      genre: 'Phép thuật',
      year: 2014,
      episodes: 1,
      videoUrl: 'https://www.youtube.com/embed/jsTxNEMlfgA',
    },
  ];

  // Tìm phim theo id
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div className="movie-detail">
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.imageUrl} alt={movie.title} />
          <p><strong>Nội dung:</strong> {movie.description}</p>
          <p><strong>Thể loại:</strong> {movie.genre}</p>
          <p><strong>Năm sản xuất:</strong> {movie.year}</p>
          <p><strong>Số tập:</strong> {movie.episodes}</p>
          <div>
            <strong>Video Trailer:</strong>
            <iframe
              width="450"
              height="250"
              src={movie.videoUrl}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <p>Phim không tồn tại</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
