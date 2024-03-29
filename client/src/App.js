// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/landing/Home";
import DoctorLogin from "./pages/DoctorLogin";
import PatientRegister from "./pages/PatientRegister";
import TestLanding from "./pages/landing/TestLanding";
import Ocr from "./pages/Ocr";
import Diabetes from "./pages/Diabetes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<DoctorLogin />} />
        <Route path="/register" element={<PatientRegister />} />
        {/* <Route path="/test" element={<TestLanding />} /> */}
        <Route path="/ocr" element={<Ocr />} />
        <Route path="/diabetes" element={<Diabetes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
