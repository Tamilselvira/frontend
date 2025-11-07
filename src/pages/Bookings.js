import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Booking.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  // Fetch bookings from backend (or mock if backend is off)
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Backend not running. Showing mock data.");
        // Mock data fallback
        setBookings([
          {
            _id: "1",
            name: "Ramesh Kumar",
            type: "Plumber",
            district: "Chennai",
            phone: "9876543210",
          },
          {
            _id: "2",
            name: "Suresh Babu",
            type: "Electrician",
            district: "Madurai",
            phone: "9876501234",
          },
        ]);
      }
    };
    fetchBookings();
  }, []);

  // Delete booking
  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
      alert("Booking deleted successfully!");
    } catch (err) {
      console.error(err);
      // If backend not available, just remove it locally
      setBookings(bookings.filter((b) => b._id !== id));
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-content">
        <h2 className="booking-title">📋 Your Bookings</h2>
        {error && <p className="error-text">{error}</p>}

        {bookings.length === 0 ? (
          <p className="no-bookings">No bookings yet.</p>
        ) : (
          <div className="booking-grid">
            {bookings.map((b) => (
              <div className="booking-card" key={b._id}>
                <h3>{b.name}</h3>
                <p>
                  <strong>Service:</strong> {b.type}
                </p>
                <p>
                  <strong>District:</strong> {b.district}
                </p>
                <p>
                  <strong>Contact:</strong> {b.phone}
                </p>
                <button
                  className="delete-btn"
                  onClick={() => deleteBooking(b._id)}
                >
                  🗑 Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings;
