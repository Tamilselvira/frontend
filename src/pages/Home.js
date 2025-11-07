import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // Define multiple providers for each service (at least 5)
  const services = [
    { name: "Plumber" },
    { name: "Electrician" },
    { name: "Cleaner" },
    { name: "Carpenter" },
    { name: "IT Support" },
    { name: "Painter" },
  ];

  const handleClick = (serviceName) => {
    navigate("/service-finder", { state: { filter: serviceName } });
  };

  return (
    <div className="home-container">
      <h1>Explore Services</h1>
      <div className="services-grid">
        {services.map((s, idx) => (
          <div key={idx} className="service-card" onClick={() => handleClick(s.name)}>
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
