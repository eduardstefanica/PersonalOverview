import React from 'react';
import './App.css';
import './Components/Card/BigCard.css';
import Navbar from './Components/Navbar/Navbar';
//import fotoCV from './src/img/fotoCV.png';


function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <div className="container">
        </div>
      </header>

      <div className="container">
        <div className="card">
          <img src="./src/img/fotoCV.png" alt="Your Image" className="card-image" />
          {/* Aggiungi l'immagine 1:1 qui */}
        </div>
      </div>
    </div>
  );
}

export default App;

