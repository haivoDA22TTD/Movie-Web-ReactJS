// src/App.jsx
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          {/* Các liên kết điều hướng */}
          <Link to="/">Trang Chủ</Link>
          <Link to="/category">Danh Mục</Link>
          <Link to="/signup">Đăng Ký</Link> {/* Link đến trang Đăng Ký */}
          <Link to="/login">Đăng Nhập</Link> {/* Link đến trang Đăng Nhập */}
        </nav>
      </header>
      <main>
        <Outlet /> {/* Đây là nơi các trang con sẽ được hiển thị */}
      </main>
      <footer>
        <p>&copy; 2025 My Movie App</p>
      </footer>
    </div>
  );
}

export default App;
