import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const productList = [
    { id: 101, name: 'Laptop Dell' },
    { id: 102, name: 'Bàn phím cơ' },
    { id: 103, name: 'Chuột Logitech' },
  ];

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {productList.map((p) => (
          <li key={p.id}>
            <Link to={`/san-pham/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
