import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard'
import React, { useState } from 'react';

function App() {

  const [token, setToken] = useState('')

  return (
    token === '' ? <Home setToken={setToken} /> : <Dashboard />
  );
}

export default App;
