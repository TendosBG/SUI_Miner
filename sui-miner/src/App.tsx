import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mine1 from './components/Mine1'
import Mine2 from './components/Mine2'
import Mines from './components/Mines'
import Menu from './components/Menu'
import React, { useState, useEffect } from 'react';



function App() {
  const [argent, setArgent] = useState(0);
  const [argent_payant, setArgent_Payant] = useState(10000);
  const [niveauAmelioration, setNiveauAmelioration] = useState(10);
  const [coutAmelioration1, setCoutAmelioration1] = useState(10);
  const [levelMine1, setLevelMine1] = useState(1);
  const [levelManager1, setLevelManager1] = useState(0);
  const [levelMine2, setLevelMine2] = useState(0);
  const [coutAmelioration2, setCoutAmelioration2] = useState(100);
  const [coutManager1, setCoutManager1] = useState(300);
  const [niveauBoost, setNiveauBoost] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setArgent(argent => argent + niveauAmelioration*niveauBoost);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [niveauAmelioration]);
  const handleAcheterAmelioration1 = () => {
    if (argent >= coutAmelioration1) {
      setArgent(argent - coutAmelioration1);
      setNiveauAmelioration(niveauAmelioration + 5);
      setCoutAmelioration1(coutAmelioration1 * 2); // Double le coût de l'amélioration à chaque niveau
      setLevelMine1(levelMine1 + 1);
    }
  };
    const handleAcheterAmelioration2 = () => {
      if (argent >= coutAmelioration2) {
        setArgent(argent - coutAmelioration2);
        setNiveauAmelioration(niveauAmelioration + 50);
        setCoutAmelioration2(coutAmelioration2 * 2);
        setLevelMine2(levelMine2 + 1); // Double le coût de l'amélioration à chaque niveau
      }
  };
  const handleManager1 = () => {
    if (argent_payant >= coutManager1) {
      setArgent_Payant(argent_payant - coutManager1);
      setNiveauBoost(niveauBoost +1);
      setCoutManager1(coutManager1 * 10); // Double le coût de l'amélioration à chaque niveau
      setLevelManager1(levelManager1 + 1);
    }
};
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
      <div>
      <p>Vous avez {argent} pièces.</p>
      <p>Vous avez {argent_payant} SuiCoins.</p>
      <button onClick={handleAcheterAmelioration1}>
        Acheter une amélioration Mine 1({coutAmelioration1} pièces) Level : ({levelMine1})
      </button>
      <button onClick={handleAcheterAmelioration2}>
        Acheter une amélioration Mine 2({coutAmelioration2} pièces) Level : ({levelMine2})
      </button>
      <button onClick={handleManager1}>
        Acheter un manager pour la mine 1({coutManager1} pièces) Level : ({levelManager1})
      </button>
      </div>
    
        <Mines/>
        <Mine1/>
        <Mine2/>
      </div>
    </>
  );
}

export default App;
