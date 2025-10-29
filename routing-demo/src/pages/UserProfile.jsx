import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  // Lấy tham số động "id" từ URL /users/:id
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Hồ sơ người dùng</h2>
      <p>ID người dùng hiện tại là: <strong>{id}</strong></p>

   
    </div>
  );
}
