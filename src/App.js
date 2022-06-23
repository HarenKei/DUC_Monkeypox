import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Domestic from "./Components/Domestic/Domestic";
import Overseas from "./Components/Overseas/Overseas";
import Footer from "./Components/Footer/Footer";
import './App.css';


function App() {

  return (
    <div>
      <Header/>
      <Domestic/>
      <Overseas/>
      <Footer/>
    </div>
    
  );
}

export default App;
