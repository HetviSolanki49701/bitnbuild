import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import About from './Pages/About';
import Home from './Pages/landing/Home';
import DoctorLogin from './Pages/DoctorLogin';
import PatientRegister from './Pages/PatientRegister';
import TestLanding from './Pages/landing/TestLanding';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/about" element={<About/>} />
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<DoctorLogin />} />
       <Route path="/register" element={<PatientRegister />} />
       <Route path="/test" element={<TestLanding />} />
     </Routes>
   </BrowserRouter>


          )
}

export default App;
