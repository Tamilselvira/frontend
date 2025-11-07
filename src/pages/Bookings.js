import React, { useState, useEffect } from "react";
import axios from "axios";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        console.log(res.data); // check what is returned
        setBookings(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((b, idx) => (
            <li key={idx}>
              {b.name} - {b.type} ({b.district}) - Contact: {b.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bookings;
