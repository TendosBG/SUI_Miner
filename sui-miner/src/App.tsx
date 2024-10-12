import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mine1 from './components/Mine1'
import Mine2 from './components/Mine2'
import Mines from './components/Mines'
import Menu from './components/Menu'
import React from 'react';
import DrillAnimation from './DrillAnimation';
import MinerAnimation from './MinerAnimation';
import CartAnimation from './CartAnimation';
import ManagerAnimation from './ManagerAnimation';


function App() {
  return (
    
    <>
    

    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/profile" element={"<Profile />"} />
        <Route path="/shop" element={"<Shop />"} />
        <Route path="/success" element={"<Success />"} />
        <Route path="/about" element={"<About />"} />
        <Route path="/contact" element={"<Contact />"} />
      </Routes>
    </Router>
      <div id="gameContainer">
      <DrillAnimation />
      <MinerAnimation />
      <CartAnimation />
      <ManagerAnimation />
    
        <Mines/>
        <Mine1/>
        <Mine2/>
      </div>
    </>
  );
}

export default App;
