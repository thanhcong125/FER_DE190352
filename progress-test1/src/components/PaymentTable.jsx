import React from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { usePayment } from "../contexts/PaymentContext";

const PaymentTable = () => {
  const { filteredPayments, deletePayment, isLoading } = usePayment();
  const navigate = useNavigate();

  if (isLoading) return <Spinner animation="border" />;

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Payment List</h4>
        <Button variant="success" onClick={() => navigate("/payments/add")}>
          + Add Payment
        </Button>
      </div>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Semester</th>
            <th>Course</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

       <tbody>
  {Array.isArray(filteredPayments) && filteredPayments.length > 0 ? (
    filteredPayments.map((p) => (
      <tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.semester}</td>
        <td>{p.courseName}</td>
        <td>${p.amount}</td>
        <td>
          <Button
            variant="info"
            size="sm"
            className="me-2"
            onClick={() => navigate(`/payments/${p.id}`)}
          >
            View
          </Button>
          <Button
            variant="warning"
            size="sm"
            className="me-2"
            onClick={() => navigate(`/payments/edit/${p.id}`)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => deletePayment(p.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center text-muted">
        No payments found.
      </td>
    </tr>
  )}
</tbody>

      </Table>
    </div>
  );
};

export default PaymentTable;
