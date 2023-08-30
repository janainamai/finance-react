import Home from './components/pages/Home.jsx';
import Dashboard from './components/pages/Dashboard.jsx'
import React, { useState } from 'react';

function App() {

  return (
    localStorage.getItem('token') === '' ? <Home /> : <Dashboard />
  );
}

export default App
