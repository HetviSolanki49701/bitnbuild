import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import About from './Pages/About';
import Home from './Pages/Home';
import DoctorLogin from './Pages/DoctorLogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/about" element={<About/>} />
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<DoctorLogin />} />
     </Routes>
   </BrowserRouter>


          )
}

export default App;
