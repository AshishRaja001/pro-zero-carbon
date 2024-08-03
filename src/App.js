import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import LineChart from './LineChart';

const App = () => {
  const [view, setView] = useState('table');

  return (
    <div className="App">
      <h1>ASHISH RAJA</h1>
      <div className="header">
        
       <u> <h2>Olympic Medals Analysis</h2></u>

        <a>Email: ashishrajanagabathula@gmail.com</a>
        <p>Contact: +91-8143020249</p>
      </div>
      <div className="tabs">
        <button 
          className={`tab ${view === 'table' ? 'active' : ''}`} 
          onClick={() => setView('table')}
        >
          Table
        </button>
        <button 
          className={`tab ${view === 'chart' ? 'active' : ''}`} 
          onClick={() => setView('chart')}
        >
          Line Chart
        </button>
      </div>
      <div className="content">
        {view === 'table' ? <Table /> : <LineChart />}
      </div>
    </div>
  );
}

export default App;
