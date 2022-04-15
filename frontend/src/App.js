import React from 'react';
import './App.css';
// import Dashboard from './UIcomponents/Dashboard/Dashboard';
// import Preferences from './UIcomponents/Preferences/Preferences';

import Sidebar from './UIcomponents/Sidebar/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      {/* <Dashboard />
      <Preferences /> */}
    </div>
  );
}

export default App;
