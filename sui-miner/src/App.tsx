import './App.css';
import Mine1 from './components/Mine1';
import Mine2 from './components/Mine2';
import Mines from './components/Mines';
import ImageAnimation from './SpriteAnimation';


function App() {
  return (
    
    <>
    <div>
      <h1>Image Animation</h1>
      <ImageAnimation/>
    </div>
      <Mines />
      <Mine1 />
      <Mine2 />
    </>
  );
}

export default App;
