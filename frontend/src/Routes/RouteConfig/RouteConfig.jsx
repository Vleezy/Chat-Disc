import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

// Lazy Loading
const Login = React.lazy(() => import('../Login'));
const Register = React.lazy(() => import('../Register'));
const Chat = React.lazy(() => import('../Chat'));

function RouteConfig() {
  return (
    <div>
{/* <Navigation /> */}
<Routes>

{/* Default Initial Page */}
<Route path="/" element={<Navigate replace to="/login" />} />

{/* Pages Routed */}
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/chat" element={<Chat />} />


</Routes>

    </div>
  )
}

export default RouteConfig