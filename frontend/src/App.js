import React from 'react';
import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";
// import Dashboard from './UIcomponents/Dashboard/Dashboard';
// import Preferences from './UIcomponents/Preferences/Preferences';

// Pages

const Login = React.lazy(() => import('../src/Routes/Login'));
const Chat = React.lazy(() => import('../src/Routes/Chat'));

// import Sidebar from './UIcomponents/Sidebar/Sidebar';

function App() {
  return (
  <div>
{/* <Navigation /> */}
<Routes>

{/* Default Initial Page */}
<Route path="/" element={<Navigate replace to="/login" />} />

{/* Pages Routed */}
<Route path="/login" element={<Login />} />
<Route path="/chat" element={<Chat />} />


</Routes>
</div>

  );
}

export default App;
