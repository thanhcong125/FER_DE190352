import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

const PaymentContext = createContext();

const initialState = {
  payments: [],
  filteredPayments: [],
  isLoading: false,
  error: null,
  searchTerm: "",
  filterSemester: "",
  filterCourse: "",
  sortOption: "course_asc",
};

const paymentReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        payments: action.payload,
        filteredPayments: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    case "ADD_PAYMENT":
      return {
        ...state,
        payments: [...state.payments, action.payload],
        filteredPayments: [...state.filteredPayments, action.payload],
      };
    case "UPDATE_PAYMENT":
      return {
        ...state,
        payments: state.payments.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
        filteredPayments: state.filteredPayments.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case "DELETE_PAYMENT":
      return {
        ...state,
        payments: state.payments.filter((p) => p.id !== action.payload),
        filteredPayments: state.filteredPayments.filter(
          (p) => p.id !== action.payload
        ),
      };
    case "SET_FILTERS":
      return {
        ...state,
        ...action.payload,
        filteredPayments: applyFilters(state, action.payload),
      };
    default:
      return state;
  }
};

// 🧠 Hàm xử lý lọc, tìm kiếm, sắp xếp
function applyFilters(state, payload) {
  const { payments } = state;
  let filtered = [...payments];

  const { searchTerm, filterSemester, filterCourse, sortOption } = {
    ...state,
    ...payload,
  };

  // Search
  if (searchTerm) {
    filtered = filtered.filter(
      (p) =>
        (p.semester &&
          p.semester.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (p.courseName &&
          p.courseName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  // Filter Semester
  if (filterSemester) {
    filtered = filtered.filter((p) => p.semester === filterSemester);
  }

  // Filter Course
  if (filterCourse) {
    filtered = filtered.filter((p) => p.courseName === filterCourse);
  }

  // Sort
  filtered.sort((a, b) => {
    const aCourse = a.courseName || "";
    const bCourse = b.courseName || "";
    const aAmount = Number(a.amount) || 0;
    const bAmount = Number(b.amount) || 0;
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    switch (sortOption) {
      case "course_asc":
        return aCourse.localeCompare(bCourse);
      case "course_desc":
        return bCourse.localeCompare(aCourse);
      case "amount_asc":
        return aAmount - bAmount;
      case "amount_desc":
        return bAmount - aAmount;
      case "date_asc":
        return aDate - bDate;
      case "date_desc":
        return bDate - aDate;
      default:
        return 0;
    }
  });

  return filtered;
}

export const PaymentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paymentReducer, initialState);
  const API_URL = "http://localhost:3001/payments";

  // Lấy danh sách từ JSON Server
  const fetchPayments = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await axios.get(API_URL);
      // Làm sạch dữ liệu (đảm bảo key đúng)
      const cleaned = res.data.map((p) => ({
        id: p.id,
        userId: p.userId || "",
        semester: p.semester || "Unknown",
        courseName: p.courseName || "Unknown Course",
        amount: Number(p.amount) || 0,
        date: p.date || "",
      }));
      dispatch({ type: "FETCH_SUCCESS", payload: cleaned });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    }
  };

  // CRUD cơ bản
  const addPayment = async (newPayment) => {
    const res = await axios.post(API_URL, newPayment);
    dispatch({ type: "ADD_PAYMENT", payload: res.data });
  };

  const updatePayment = async (id, updatedData) => {
    const res = await axios.put(`${API_URL}/${id}`, updatedData);
    dispatch({ type: "UPDATE_PAYMENT", payload: res.data });
  };

  const deletePayment = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: "DELETE_PAYMENT", payload: id });
  };

  const setFilters = (filters) => {
    dispatch({ type: "SET_FILTERS", payload: filters });
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <PaymentContext.Provider
      value={{
        ...state,
        fetchPayments,
        addPayment,
        updatePayment,
        deletePayment,
        setFilters,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
