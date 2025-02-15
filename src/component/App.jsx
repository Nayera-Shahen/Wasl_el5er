import React from "react";
import Navbar from "../component/navbar/Navbar";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singup from "./pages/Singup";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/Singup" exact Component={Singup} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
