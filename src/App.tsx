import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctor from "./Front/VistasDoctor/Doctor";
import DoctorPac from "./Front/VistasDoctor/DoctorPac";
import Factura from "./Front/Factura/Factura";
import QuienesSomos from "./Front/LandinPage/QuienesSomos";
import Servicios from "./Front/Servicios/Servicios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./Front/Login/Login";
import Historial from "./Front/VistasUsuario/Historial";
import Agenda from "./Front/VistasUsuario/Agenda";
import ProgramarCita from "./Front/VistasUsuario/ProgramarCita";
import Horarios from "./Front/VistasUsuario/Horarios";
import HistoriaClinica from "./Front/VistasDoctor/Historia Clinica/HistoriaClinica";
import NotiDoc from "./Front/VistasDoctor/NotiDoc";
import Mensajes from "./Front/VistasDoctor/Mensajes";
import Horario from "./Front/VistasDoctor/Horario";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Doctor />} />
        <Route path="/doctor-tratamiento" element={<DoctorPac />} />
        <Route path="/Horario" element={<Horario />} />
        <Route path="/Mensajes" element={<Mensajes/>} />
        <Route path="/Notificacion" element={<NotiDoc/>} />
        <Route path="/factura" element={<Factura />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} /> {/* Nueva ruta para QuienesSomos */}
        <Route path="/servicios" element={<Servicios />} /> {/* Nueva ruta para QuienesSomos */}
        <Route path="/login" element={<Login />} /> {/* Nueva ruta para QuienesSomos */}
        <Route path="/historial-usuario" element={<Historial />} /> 
        <Route path="/agenda-usuario" element={<Agenda />} /> 
        <Route path="/programar-cita-usuario" element={<ProgramarCita />} /> 
        <Route path="/horarios-usuario" element={<Horarios />} /> 
        <Route path="/historia-usuario" element={<HistoriaClinica />} /> 
      </Routes>
    </Router>
  );
};

export default App;
