import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { usePayment } from "../contexts/PaymentContext";

const FilterBar = () => {
  const {
    searchTerm,
    filterSemester,
    filterCourse,
    sortOption,
    setFilters,
    payments,
  } = usePayment();

  const uniqueSemesters = [...new Set(payments.map((p) => p.semester))];
  const uniqueCourses = [...new Set(payments.map((p) => p.course))];

  const handleChange = (e) => {
    setFilters({ [e.target.name]: e.target.value });
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header as="h5">Tìm kiếm & Lọc thanh toán</Card.Header>
      <Card.Body>
        <Form>
          <Row className="g-3">
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  name="searchTerm"
                  value={searchTerm}
                  placeholder="Search by semester or course"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group>
                <Form.Label>Semester</Form.Label>
                <Form.Select
                  name="filterSemester"
                  value={filterSemester}
                  onChange={handleChange}
                >
                  <option value="">All</option>
                  {uniqueSemesters.map((sem) => (
                    <option key={sem} value={sem}>
                      {sem}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group>
                <Form.Label>Course</Form.Label>
                <Form.Select
                  name="filterCourse"
                  value={filterCourse}
                  onChange={handleChange}
                >
                  <option value="">All</option>
                  {uniqueCourses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={2}>
              <Form.Group>
                <Form.Label>Sort By</Form.Label>
                <Form.Select
                  name="sortOption"
                  value={sortOption}
                  onChange={handleChange}
                >
                  <option value="course_asc">Course ↑</option>
                  <option value="course_desc">Course ↓</option>
                  <option value="amount_asc">Amount ↑</option>
                  <option value="amount_desc">Amount ↓</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FilterBar;
