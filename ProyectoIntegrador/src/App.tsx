import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Doctor from "./Doctor";
import DoctorPac from "./DoctorPac";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Doctor />} />
        <Route path="/doctor-tratamiento" element={<DoctorPac />} />
      </Routes>
    </Router>
  );
};

export default App;
