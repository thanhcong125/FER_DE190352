import React, { useState } from "react";
import { Card, Button, Row, Col, Badge, Modal, Toast, ToastContainer } from "react-bootstrap";
import { movies } from "../../data/movies";

export default function MovieCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // Lưu phim yêu thích vào localStorage
  const addToFavourites = (movie) => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    if (!favourites.find((m) => m.id === movie.id)) {
      favourites.push(movie);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setShowToast(true);
    }
  };

  // Mở modal chi tiết
  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <Row xs={1} sm={2} md={3} className="g-4">
        {movies.map((m) => (
          <Col key={m.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={m.poster}
                alt={m.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>
                  {m.title} <Badge bg="info">{m.genre}</Badge>
                </Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                  {m.description.slice(0, 80)}...
                </Card.Text>
                <p>
                  <Badge bg="secondary">{m.year}</Badge>{" "}
                  <Badge bg="light" text="dark">
                    {m.country}
                  </Badge>{" "}
                  <Badge bg="dark">{m.duration} min</Badge>
                </p>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="outline-primary"
                    onClick={() => addToFavourites(m)}
                  >
                    ❤️ Add to Favourites
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={() => handleViewDetails(m)}
                  >
                    📖 View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Toast hiển thị thêm thành công */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2000}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">
            ✅ Added to favourites!
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Modal hiển thị chi tiết phim */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {selectedMovie && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedMovie.poster}
                alt={selectedMovie.title}
                className="img-fluid mb-3"
              />
              <p><strong>Genre:</strong> {selectedMovie.genre}</p>
              <p><strong>Year:</strong> {selectedMovie.year}</p>
              <p><strong>Country:</strong> {selectedMovie.country}</p>
              <p><strong>Duration:</strong> {selectedMovie.duration} minutes</p>
              <p><strong>Description:</strong> {selectedMovie.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}
