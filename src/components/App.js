import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Cupadd from "../routes/Cupadd";
import Cupcheckin from "../routes/Cupcheckin";
import Cupcheckout from "../routes/Cupcheckout";
import Cupwashing from "../routes/Cupwashing";
import Cupinfo from "../routes/Cupinfo";
import Detail from "../routes/Detail";

function App() {
  
  const [isLoggedIn, , setIsLoggedIn] = useState(false);

  return(
      <Router>
        <Routes> 
            <Route path="/" element={isLoggedIn ? <Home /> : <Auth />} />
            <Route path="/cupcheckin" element={isLoggedIn ? <Cupcheckin /> : <Auth />} /> 
            <Route path="/cupcheckout" element={isLoggedIn ? <Cupcheckout /> : <Auth />} /> 
            <Route path="/cupwashing" element={isLoggedIn ? <Cupwashing /> : <Auth />} /> 
            <Route path="/cupinfo" element={isLoggedIn ? <Cupinfo /> : <Auth />} /> 
            <Route path="/cupinfo/:id" element={isLoggedIn ? <Detail /> : <Auth />} />
        </Routes>
      </Router>
  );
}

export default App;