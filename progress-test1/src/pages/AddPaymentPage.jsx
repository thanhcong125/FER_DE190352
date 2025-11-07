import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { usePayment } from "../contexts/PaymentContext";
import { useAuth } from "../contexts/AuthContext";

const AddPaymentPage = () => {
  const { addPayment } = usePayment();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Form khởi tạo
  const [form, setForm] = useState({
    semester: "",
    courseName: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Xác thực cơ bản
    if (!form.semester || !form.courseName || !form.amount || !form.date) {
      alert("Please fill in all fields!");
      return;
    }

    // Tạo đối tượng payment theo đúng db.json
    const newPayment = {
      id: Date.now().toString(), // tạo id duy nhất
      userId: user?.id || "1", // Lấy userId từ người đăng nhập
      semester: form.semester,
      courseName: form.courseName,
      amount: Number(form.amount),
      date: form.date,
    };

    await addPayment(newPayment);
    navigate("/home");
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Header as="h5">Add New Payment</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Semester */}
            <Form.Group className="mb-3">
              <Form.Label>Semester</Form.Label>
              <Form.Control
                type="text"
                name="semester"
                value={form.semester}
                onChange={handleChange}
                placeholder="e.g., Fall 2025"
                required
              />
            </Form.Group>

            {/* Course Name */}
            <Form.Group className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                name="courseName"
                value={form.courseName}
                onChange={handleChange}
                placeholder="e.g., Web Development"
                required
              />
            </Form.Group>

            {/* Amount */}
            <Form.Group className="mb-3">
              <Form.Label>Amount (VND)</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="e.g., 3500000"
                required
              />
            </Form.Group>

            {/* Date */}
            <Form.Group className="mb-3">
              <Form.Label>Payment Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Submit */}
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={() => navigate("/home")}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save Payment
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddPaymentPage;
