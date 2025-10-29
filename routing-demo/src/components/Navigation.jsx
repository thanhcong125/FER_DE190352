import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ margin: '20px', display: 'flex', gap: '20px' }}>
      {/* NavLink tự động thêm class 'active' nếu đường dẫn khớp */}

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Trang Chủ
      </NavLink>

      <NavLink
        to="/san-pham"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Sản Phẩm
      </NavLink>

      <NavLink
        to="/lien-he"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Liên Hệ
      </NavLink>

      <NavLink
        to="/users/123"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        User 123
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Navigation;
