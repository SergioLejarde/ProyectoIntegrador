import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctor from "./Front/VistasDoctor/Doctor";
import DoctorPac from "./Front/VistasDoctor/DoctorPac";
import Factura from "./Front/Factura/Factura";
import QuienesSomos from "./Front/LandinPage/QuienesSomos";
import Servicios from "./Front/Servicios/Servicios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Doctor />} />
        <Route path="/doctor-tratamiento" element={<DoctorPac />} />
        <Route path="/factura" element={<Factura />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} /> {/* Nueva ruta para QuienesSomos */}
        <Route path="/servicios" element={<Servicios />} /> {/* Nueva ruta para QuienesSomos */}
      </Routes>
    </Router>
  );
};

export default App;
