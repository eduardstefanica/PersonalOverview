import React from 'react';
import './App.css';
//import Home from './Components/Home';
import './Components/Card/BigCard.css';
//import './Components/Card/SmallCard.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar fuori dal Card */}

      <header className="App-header">
        <div className="container">
        </div>
      </header>

      <div className="container">
        <div className="card">
          {/* Il tuo componente Card qui */}
        </div>
      </div>
    </div>

  );
}

export default App;
