import Counter from "./components/counter"
import './App.css';
import react from 'react'
function App() {

  return (
    <div className="App">
      <h2 style={{color:"orangered"}}>COUNTER</h2>
      <Counter counter={0} />
    </div>
  );
}

export default App;
