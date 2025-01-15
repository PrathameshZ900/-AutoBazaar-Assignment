import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddCar from "./components/AddCar";
import CarsList from "./components/CarsList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar added here */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/cars" element={<CarsList />} />
      </Routes>
    </Router>
  );
}

export default App;
