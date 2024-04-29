import React from 'react';
import './App.css';
import './Components/Card/BigCard.css';
import Navbar from './Components/Navbar/Navbar';
import fotoCV from './img/fotoCV.png';

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <div className="container">
        </div>
      </header>
      
      <br></br>

      <div className="container">
        <div className="card">
          <img src={fotoCV} alt="Your Image" className="card-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
