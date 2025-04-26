// src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // Thêm CSS cho các trang này

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện đăng ký người dùng (gửi dữ liệu đến API hoặc xử lý trong frontend)
    console.log(formData);
    // Sau khi đăng ký thành công, chuyển hướng đến trang đăng nhập
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <h2><i className="bx bx-user"></i> Đăng Ký Tài Khoản</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label><i className="bx bx-user-circle"></i> Tên Người Dùng:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit" className="auth-btn">Đăng Ký</button>
      </form>
    </div>
  );
};

export default SignUpPage;
