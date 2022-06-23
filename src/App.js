import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Domestic from "./Components/Domestic/Domestic";
import { VectorMap } from '@south-paw/react-vector-maps';
import Overseas from "./Components/Overseas";
import world from './world.json';


function App() {

  return (
    <div>
      <Header/>
      <Domestic/>
      <Overseas/>
      <VectorMap {...world}/> 
      

    </div>
    
  );
}

export default App;
