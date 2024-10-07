import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} /> {/* Asegúrate de agregar esta línea */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
