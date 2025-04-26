// src/pages/CategoryPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryPage.css'; // Đảm bảo bạn đã tạo file CSS riêng cho CategoryPage

const CategoryPage = () => {
  return (
    <div className="category-page">
      <h1>Danh Mục Phim</h1>
      <div className="category-list">
        <Link to="/category/fantasy" className="category-item">
          <div className="category-title">Phép thuật</div>
        </Link>
        <Link to="/category/horror" className="category-item">
          <div className="category-title">Kinh Dị</div>
        </Link>
        <Link to="/category/tactics" className="category-item">
          <div className="category-title">Chiến thuật</div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryPage;
