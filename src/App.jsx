import './app.css';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VehicleDetails from "./pages/VehicleDetails";
import Checkout from "./pages/Checkout";
import MyBookings from "./pages/MyBookings";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      {/* ✅ Always show Navbar at the top */}
      <Navbar />

      {/* ✅ App Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* ✅ Vehicle detail page */}
        <Route path="/vehicle/:id" element={<VehicleDetails />} />

        {/* ✅ Protected: Only for logged-in users */}
        <Route 
          path="/checkout/:id" 
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/my-bookings" 
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          } 
        />

        {/* ✅ Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

