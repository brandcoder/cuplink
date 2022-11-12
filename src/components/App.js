import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Cupadd from "../routes/Cupadd";
import Cupcheckin from "../routes/Cupcheckin";
import Cupcheckout from "../routes/Cupcheckout";
import Cupwashing from "../routes/Cupwashing";
import Cupinfo from "../routes/Cupinfo";
import Detail from "../routes/Detail";

function App() {
  
  return(
      <Router>
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/cupadd" element={<Cupadd />} /> 
            <Route path="/cupcheckin" element={<Cupcheckin />} /> 
            <Route path="/cupcheckout" element={<Cupcheckout />} /> 
            <Route path="/cupwashing" element={<Cupwashing />} /> 
            <Route path="/cupinfo" element={<Cupinfo />} /> 
            <Route path="/cupinfo/:id" element={<Detail />} />
        </Routes>
      </Router>
  );
}

export default App;