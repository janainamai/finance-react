import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import NewUser from './components/pages/NewUser';
import Login from './components/pages/Login';
import BankAccount from './components/pages/BankAccount'

import Container from './components/layout/Container'

function App() {

  const [token, setToken] = useState()

  return (
    <Router>
        <Navbar />

        <Container customClass='min-height'>
          <Routes>
            <Route exact path='/' element={<Home setToken={setToken} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastrar' element={<NewUser />} />
            <Route path='/bankAccount' element={<BankAccount />} />
          </Routes>
        </Container>
        
        <Footer />

    </Router>
  );
}

export default App;
