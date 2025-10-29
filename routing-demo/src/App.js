import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './pages/UserProfile'; 
// Import các component và trang
import Navigation from './components/Navigation';

// Trang cơ bản
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Trang Dashboard (Nested Routes)
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import Settings from './pages/dashboard/Settings';
import Reports from './pages/dashboard/Reports';

function App() {
  return (
    <>

      <Navigation />

      <div className="container" style={{ padding: '20px' }}>
        <Routes>
          {/* 1. Các route cơ bản */}
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/users/:id" element={<UserProfile />} />

          {/* 2. Route động (Dynamic Routing) */}
          <Route path="/san-pham/:productId" element={<ProductDetail />} />

          {/* 3. Nested Routes cho Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Index Route hiển thị mặc định khi vào /dashboard */}
            <Route index element={<DashboardHome />} />
            {/* Các route con */}
            <Route path="settings" element={<Settings />} />
            <Route path="reports" element={<Reports />} />
          </Route>

          {/* 4. Route 404 - Không tìm thấy */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
