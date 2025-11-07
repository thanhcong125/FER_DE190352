import React from 'react';
import { Table, Button, Spinner, Modal } from 'react-bootstrap';
// ⚠️ Lưu ý: Tôi đã bỏ "s" ở cuối MovieContexts để tránh lỗi nếu tên file gốc là MovieContext.jsx
import { useMovieState, useMovieDispatch } from '../contexts/MovieContexts';

function MovieTable() {
  const { movies, loading, showDeleteModal, movieToDelete, genres } = useMovieState();
  const { dispatch, confirmDelete } = useMovieDispatch();

  // Hàm ánh xạ genreId sang Tên thể loại
  const getGenreName = (genreId) => {
    const genre = genres.find(g => g.id === genreId);
    return genre ? genre.name : 'N/A';
  };

  // Mở modal Sửa
  const handleEdit = (movie) => {
    // Chuyển genreId về dạng string vì input select thường nhận string
    const movieToEdit = { ...movie, genreId: String(movie.genreId) };
    dispatch({ type: 'OPEN_EDIT_MODAL', payload: movieToEdit });
  };

  // Mở modal Xóa
  const handleDelete = (movie) => {
    dispatch({ type: 'OPEN_DELETE_MODAL', payload: movie });
  };

  if (loading && movies.length === 0) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <>
      <h3>Danh sách Phim</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {/* 1. THÊM CỘT POSTER VÀO TIÊU ĐỀ */}
            <th>Poster</th> 
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Mô tả</th>
            <th>Thể loại</th>
            <th>Năm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              {/* 2. HIỂN THỊ ẢNH TRONG CELL ĐẦU TIÊN */}
              <td>
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  style={{ width: '50px', height: '75px', objectFit: 'cover' }} 
                />
              </td>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.description.substring(0, 50) + '...'}</td> {/* Cắt bớt mô tả cho gọn */}
              <td>{getGenreName(movie.genreId)}</td>
              <td>{movie.year}</td>
              <td>
                <Button 
                  variant="warning" 
                  size="sm" 
                  className="me-2"
                  onClick={() => handleEdit(movie)}
                >
                  Sửa
                </Button>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => handleDelete(movie)}
                >
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal xác nhận Xóa (Giữ nguyên) */}
      <Modal show={showDeleteModal} onHide={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận Xóa Phim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa phim: **{movieToDelete?.title}** (ID: {movieToDelete?.id})?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
            Hủy
          </Button>
          <Button variant="danger" onClick={() => confirmDelete(movieToDelete.id)} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Xóa'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieTable;