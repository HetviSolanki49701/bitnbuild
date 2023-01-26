import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/about" element={<About/>} />
       <Route path="/" element={<Home />} />
     </Routes>
   </BrowserRouter>


          )
}

export default App;
