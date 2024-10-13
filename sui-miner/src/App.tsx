import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import { BuyButton } from './components/BuyButton';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mine1 from './components/Mine1'
import Mine2 from './components/Mine2'
import Mines from './components/Mines'
import Menu from './components/Menu'
import Mine3 from './components/Mine3';




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
        
        <canvas></canvas>
        <script src='main.js'></script>
        <Mines/>
        <Mine1/>
        <Mine2/>
        <Mine3/>
        
      </div>
    </>

  )
}

export default App
