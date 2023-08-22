import logo from './logo.svg';
import './App.css';
import { First } from './components/First';
import { Portfolio } from './components/Portfolio';
import { Last } from './components/Last';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <First/>
      <Portfolio/>
      <Last/>
      <Footer/> 
    </div>
  );
}

export default App;
