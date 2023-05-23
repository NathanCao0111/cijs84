import './App.css';
import { useState } from 'react'

function App() {
  const [red, setRed] = useState(true)
  const [yellow, setYellow] = useState(false)
  const [green, setGreen] = useState(false)

  const handleNext = () => {
    if (red === true) {
      setRed(false)
      setYellow(true)
    }
    if (yellow === true) {
      setYellow(false)
      setGreen(true)
    }
    if (green === true) {
      setGreen(false)
      setRed(true)
    }
  }

  return (
    <div className="App">
      <button onClick={handleNext}>Next</button>
      <div className='circle-container'>
        <div className='circle' style={red === true ? {backgroundColor: 'red'} : {}}></div>
        <div className='circle' style={yellow === true ? {backgroundColor: 'yellow'} : {}}></div>
        <div className='circle' style={green === true ? {backgroundColor: 'green'} : {}}></div>
      </div>
    </div>
  );
}

export default App;