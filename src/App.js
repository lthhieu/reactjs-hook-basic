import logo from './logo.svg';
import './App.scss';
import * as components from './components'
import { useState } from 'react';
function App() {
  let [name, setName] = useState('')
  let [display, setDisplay] = useState('Hieu')
  let handleClick = (e) => {
    setDisplay(name)
  }
  let handleChangeInput = (e) => {
    setName(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <components.Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Good morning {display}</p>
        <input value={name} onChange={(e) => handleChangeInput(e)} />
        <button onClick={(e) => handleClick(e)}>Clink me!</button>
      </header>
    </div>
  );
}

export default App;
