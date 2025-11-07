import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { usePayment } from "../contexts/PaymentContext";

const EditPaymentPage = () => {
  const { id } = useParams();
  const { payments, updatePayment } = usePayment();
  const navigate = useNavigate();

  const existing = payments.find((p) => p.id.toString() === id);

  const [form, setForm] = useState({
    semester: "",
    course: "",
    amount: "",
  });

  useEffect(() => {
    if (existing) setForm(existing);
  }, [existing]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePayment(existing.id, form);
    navigate("/home");
  };

  if (!existing)
    return (
      <Container className="mt-5 text-center">
        <h5>Payment not found.</h5>
        <Button onClick={() => navigate("/home")}>Back</Button>
      </Container>
    );

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>Edit Payment</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Semester</Form.Label>
              <Form.Control
                type="text"
                name="semester"
                value={form.semester}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                name="course"
                value={form.course}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditPaymentPage;
