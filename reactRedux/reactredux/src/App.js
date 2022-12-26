import { useSelector } from 'react-redux';
import './App.css';
import Home from './Home';
import BasicSpeedDial from './Test';

function App() {

  const {c} = useSelector(state=> state.custom)
  return (
    <div className="App">
      
      <BasicSpeedDial/>
      <h1>app:{ c}</h1>
     <Home/>
    </div>
  );
}

export default App;
