// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // Thêm CSS cho các trang này

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xác thực đăng nhập (gửi dữ liệu đến API hoặc xử lý trong frontend)
    console.log(formData);
    // Sau khi đăng nhập thành công, chuyển hướng đến trang chủ
    navigate('/');
  };

  return (
    <div className="auth-page">
      <h2><i className="bx bx-log-in"></i> Đăng Nhập</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label><i className="bx bx-envelope"></i> Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label><i className="bx bx-lock-alt"></i> Mật Khẩu:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="auth-btn">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default LoginPage;
