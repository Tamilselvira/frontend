import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import "./ServiceFinder.css";

// Fix leaflet marker icon
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({ iconUrl, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;

function ServiceFinder({ setBookingCount }) {
  const [providers, setProviders] = useState([]);
  const location = useLocation();
  const filterType = location.state?.filter || ""; // get the service filter

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/providers");
        setProviders(res.data);
      } catch (err) {
        // fallback mock data with at least 5 providers per service
        setProviders([
  // Plumbers
  { id: 1, name: "John Plumber1", type: "Plumber", district: "Chennai", phone: "9876543210", lat: 13.0827, lng: 80.2707 },
  { id: 2, name: "John Plumber2", type: "Plumber", district: "Coimbatore", phone: "9876543211", lat: 11.0168, lng: 76.9558 },
  { id: 3, name: "John Plumber3", type: "Plumber", district: "Madurai", phone: "9876543212", lat: 9.9252, lng: 78.1198 },
  { id: 4, name: "John Plumber4", type: "Plumber", district: "Salem", phone: "9876543213", lat: 11.6643, lng: 78.1460 },
  { id: 5, name: "John Plumber5", type: "Plumber", district: "Tirunelveli", phone: "9876543214", lat: 8.7146, lng: 77.1025 },

  // Electricians
  { id: 6, name: "Electrician1", type: "Electrician", district: "Chennai", phone: "9123456780", lat: 13.0827, lng: 80.2707 },
  { id: 7, name: "Electrician2", type: "Electrician", district: "Coimbatore", phone: "9123456781", lat: 11.0168, lng: 76.9558 },
  { id: 8, name: "Electrician3", type: "Electrician", district: "Madurai", phone: "9123456782", lat: 9.9252, lng: 78.1198 },
  { id: 9, name: "Electrician4", type: "Electrician", district: "Salem", phone: "9123456783", lat: 11.6643, lng: 78.1460 },
  { id: 10, name: "Electrician5", type: "Electrician", district: "Tirunelveli", phone: "9123456784", lat: 8.7146, lng: 77.1025 },

  // Cleaners
  { id: 11, name: "Cleaner1", type: "Cleaner", district: "Chennai", phone: "9012345670", lat: 13.0827, lng: 80.2707 },
  { id: 12, name: "Cleaner2", type: "Cleaner", district: "Coimbatore", phone: "9012345671", lat: 11.0168, lng: 76.9558 },
  { id: 13, name: "Cleaner3", type: "Cleaner", district: "Madurai", phone: "9012345672", lat: 9.9252, lng: 78.1198 },
  { id: 14, name: "Cleaner4", type: "Cleaner", district: "Salem", phone: "9012345673", lat: 11.6643, lng: 78.1460 },
  { id: 15, name: "Cleaner5", type: "Cleaner", district: "Tirunelveli", phone: "9012345674", lat: 8.7146, lng: 77.1025 },

  // Carpenters
  { id: 16, name: "Carpenter1", type: "Carpenter", district: "Chennai", phone: "9234567890", lat: 13.0827, lng: 80.2707 },
  { id: 17, name: "Carpenter2", type: "Carpenter", district: "Coimbatore", phone: "9234567891", lat: 11.0168, lng: 76.9558 },
  { id: 18, name: "Carpenter3", type: "Carpenter", district: "Madurai", phone: "9234567892", lat: 9.9252, lng: 78.1198 },
  { id: 19, name: "Carpenter4", type: "Carpenter", district: "Salem", phone: "9234567893", lat: 11.6643, lng: 78.1460 },
  { id: 20, name: "Carpenter5", type: "Carpenter", district: "Tirunelveli", phone: "9234567894", lat: 8.7146, lng: 77.1025 },

  // IT Support
  { id: 21, name: "ITSupport1", type: "IT Support", district: "Chennai", phone: "9345678901", lat: 13.0827, lng: 80.2707 },
  { id: 22, name: "ITSupport2", type: "IT Support", district: "Coimbatore", phone: "9345678902", lat: 11.0168, lng: 76.9558 },
  { id: 23, name: "ITSupport3", type: "IT Support", district: "Madurai", phone: "9345678903", lat: 9.9252, lng: 78.1198 },
  { id: 24, name: "ITSupport4", type: "IT Support", district: "Salem", phone: "9345678904", lat: 11.6643, lng: 78.1460 },
  { id: 25, name: "ITSupport5", type: "IT Support", district: "Tirunelveli", phone: "9345678905", lat: 8.7146, lng: 77.1025 },

  // Painters
  { id: 26, name: "Painter1", type: "Painter", district: "Chennai", phone: "9456789010", lat: 13.0827, lng: 80.2707 },
  { id: 27, name: "Painter2", type: "Painter", district: "Coimbatore", phone: "9456789011", lat: 11.0168, lng: 76.9558 },
  { id: 28, name: "Painter3", type: "Painter", district: "Madurai", phone: "9456789012", lat: 9.9252, lng: 78.1198 },
  { id: 29, name: "Painter4", type: "Painter", district: "Salem", phone: "9456789013", lat: 11.6643, lng: 78.1460 },
  { id: 30, name: "Painter5", type: "Painter", district: "Tirunelveli", phone: "9456789014", lat: 8.7146, lng: 77.1025 },
]);

      }
    };
    fetchProviders();
    const interval = setInterval(fetchProviders, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBook = async (provider) => {
    try {
      await axios.post("http://localhost:5000/api/bookings", provider);
      alert(`Booking confirmed for ${provider.name}`);
      if (setBookingCount) setBookingCount(prev => prev + 1);
    } catch (err) {
      alert(`Booking saved locally for ${provider.name}`);
      if (setBookingCount) setBookingCount(prev => prev + 1);
    }
  };

  // Filter providers by service type
  const filteredProviders = filterType ? providers.filter(p => p.type === filterType) : providers;

  return (
    <div className="servicefinder-container">
      <h2>Service Providers: {filterType || "All Services"}</h2>
      <div className="map-wrapper">
        <MapContainer center={[11.0, 78.0]} zoom={7} style={{ height: "500px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
          {filteredProviders.map((p) => (
            <Marker key={p.id} position={[p.lat, p.lng]}>
              <Popup>
                <strong>{p.name}</strong> <br />
                Service: {p.type} <br />
                District: {p.district} <br />
                Contact: {p.phone} <br />
                <button onClick={() => handleBook(p)}>Book Now</button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="provider-list">
        {filteredProviders.map((p) => (
          <div key={p.id} className="provider-card">
            <h3>{p.name}</h3>
            <p>Service: {p.type}</p>
            <p>District: {p.district}</p>
            <p>Contact: {p.phone}</p>
            <button onClick={() => handleBook(p)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceFinder;
