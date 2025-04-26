// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import MovieDetailPage from './pages/MovieDetailPage';
import MoviePage from './pages/MoviePage';
import SignUpPage from './pages/SignUpPage'; // Trang đăng ký
import LoginPage from './pages/LoginPage';   // Trang đăng nhập
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/* Route chính */}
      <Route path="/" element={<App />}>
        {/* Route cho trang chủ */}
        <Route index element={<HomePage />} />
        
        {/* Route cho danh mục thể loại (CategoryPage) */}
        <Route path="category" element={<CategoryPage />} />

        {/* Route cho các phim thuộc thể loại cụ thể */}
        <Route path="category/:category" element={<MoviePage />} />
        
        {/* Route cho chi tiết phim */}
        <Route path="movie/:id" element={<MovieDetailPage />} />
        
        {/* Route cho trang đăng ký */}
        <Route path="signup" element={<SignUpPage />} />
        
        {/* Route cho trang đăng nhập */}
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  </Router>
);
