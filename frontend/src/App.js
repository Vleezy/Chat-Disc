import React from 'react';
import './App.css';
import Dashboard from './UIcomponents/Dashboard/Dashboard';
import Preferences from './UIcomponents/Preferences/Preferences';

function App() {
  return (
    <div className="wrapper">
      <Dashboard />
      <Preferences />
    </div>
  );
}

export default App;
