import logo from './logo.svg';
import './App.css';
import { First } from './components/First';
import { Portfolio } from './components/Portfolio';
import { Last } from './components/Last';
import { Footer } from './components/Footer';
import { Surprise } from './components/Surprise';
import { Cursor } from './components/Cursor';

function App() {
  return (
    <div className="App">
      <Cursor/>
      <div className="colored">
        <First/>
        <Portfolio/>
        <Last/>
        <Footer/> 
      </div>
      <Surprise/>
    </div>
  );
}

export default App;
