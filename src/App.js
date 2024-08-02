import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import LineChart from './LineChart';

const App = () => {
  const [view, setView] = useState('table');

  return (
    <div className="App">
      <div className="header">
        <h1>Olympic Medals Analysis</h1>
        <p>Email: your.email@example.com</p>
        <p>Contact: 123-456-7890</p>
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
