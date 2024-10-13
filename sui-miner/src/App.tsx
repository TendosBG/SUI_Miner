import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mine1 from './components/Mine1'
import Mine2 from './components/Mine2'
import Mines from './components/Mines'
import Menu from './components/Menu'
import Mine3 from './components/Mine3';
import {useEffect,useState} from 'react'
import { useCurrentAccount } from '@mysten/dapp-kit';




export function App() {
  const [argent, setArgent] = useState(0);
  const [argent_payant, setArgent_Payant] = useState(10000);
  const [niveauAmelioration, setNiveauAmelioration] = useState(10);
  const [coutAmelioration1, setCoutAmelioration1] = useState(10);
  const [levelMine1, setLevelMine1] = useState(1);
  const [levelManager1, setLevelManager1] = useState(0);
  const [levelMine2, setLevelMine2] = useState(1);
  const [coutAmelioration2, setCoutAmelioration2] = useState(100);
  const [coutManager1, setCoutManager1] = useState(300);
  const [niveauBoost, setNiveauBoost] = useState(1);
  const [coutAmelioration3, setCoutAmelioration3] = useState(1000);
  const [levelMine3, setLevelMine3] = useState(1);
  const [coutManager2, setCoutManager2] = useState(3000);
  const [coutManager3, setCoutManager3] = useState(30000);
  const [levelManager2, setLevelManager2] = useState(0);
  const [levelManager3, setLevelManager3] = useState(0);
  const account = useCurrentAccount();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setArgent(argent => argent + niveauAmelioration*niveauBoost);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [niveauAmelioration,niveauBoost]);
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
const handleManager2 = () => {
  if (argent_payant >= coutManager2) {
    setArgent_Payant(argent_payant - coutManager2);
    setNiveauBoost(niveauBoost +1);
    setCoutManager2(coutManager2 * 10); // Double le coût de l'amélioration à chaque niveau
    setLevelManager2(levelManager2 + 1);
  }
};
const handleManager3 = () => {
  if (argent_payant >= coutManager3) {
    setArgent_Payant(argent_payant - coutManager3);
    setNiveauBoost(niveauBoost +1);
    setCoutManager3(coutManager3 * 10); // Double le coût de l'amélioration à chaque niveau
    setLevelManager3(levelManager3 + 1);
  }
};
const handleAcheterAmelioration3 = () => {
  if (argent >= coutAmelioration3) {
    setArgent(argent - coutAmelioration3);
    setNiveauAmelioration(niveauAmelioration + 50);
    setCoutAmelioration3(coutAmelioration3 * 2);
    setLevelMine3(levelMine3 + 1); // Double le coût de l'amélioration à chaque niveau
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
        
      {/*<p>Vous avez {argent_payant} SuiCoins.</p>*/}
      
      </div>
      {account ? (
        <div id='flag2'>
          <p>{argent} SUI tokens</p>
        </div>
      ) : (
        <div id='flag3'>
          <p>Connectez-vous pour commencer à miner</p>
        </div>
      )}
        
        <Mines/>
        <Mine1 x={coutAmelioration1} y={levelMine1} z={coutManager1} a={levelManager1} handleman={handleManager1} handleame ={handleAcheterAmelioration1}/>
        <Mine2 x={coutAmelioration2} y={levelMine2} z={coutManager2} a={levelManager2} handleman={handleManager2} handleame ={handleAcheterAmelioration2}/>
        <Mine3 x={coutAmelioration3} y={levelMine3} z={coutManager3} a={levelManager3} handleman={handleManager3} handleame ={handleAcheterAmelioration3}/>
        
      </div>
    </>

  )
}

export default App
