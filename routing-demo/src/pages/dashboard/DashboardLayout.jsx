import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Trang Quản Trị (Dashboard)</h2>
      <nav style={{ marginBottom: '10px' }}>
        <NavLink to="" end style={{ marginRight: '10px' }}>
          Trang chính
        </NavLink>
        <NavLink to="settings" style={{ marginRight: '10px' }}>
          Cài đặt
        </NavLink>
        <NavLink to="reports">
          Báo cáo
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
