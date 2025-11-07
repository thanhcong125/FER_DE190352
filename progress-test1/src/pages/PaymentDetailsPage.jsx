import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { usePayment } from "../contexts/PaymentContext";

const PaymentDetailsPage = () => {
  const { id } = useParams();
  const { payments } = usePayment();
  const navigate = useNavigate();

  const payment = payments.find((p) => p.id.toString() === id);

  if (!payment)
    return (
      <Container className="mt-5 text-center">
        <h5>Payment not found.</h5>
        <Button onClick={() => navigate("/home")}>Back</Button>
      </Container>
    );

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>Payment Details</Card.Header>
        <Card.Body>
          <p>
            <strong>ID:</strong> {payment.id}
          </p>
          <p>
            <strong>Semester:</strong> {payment.semester}
          </p>
          <p>
            <strong>Course:</strong> {payment.course}
          </p>
          <p>
            <strong>Amount:</strong> ${payment.amount}
          </p>
          <Button variant="secondary" onClick={() => navigate("/home")}>
            Back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentDetailsPage;
