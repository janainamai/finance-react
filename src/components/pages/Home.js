import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarHome from '../layout/NavbarHome';
import Footer from '../layout/Footer';
import CreateUser from './auth/CreateUser';
import Login from './auth/Login';

import Container from '../layout/Container'
import WelcomeHome from './welcome/WelcomeHome';


function Home({setToken}) {

    return (
        <Router>
            <NavbarHome />

            <Container customClass='min-height'>
                <Routes>
                    <Route path='/' element={<WelcomeHome />}/>
                    <Route path='/finance/home' element={<WelcomeHome />}/>
                    <Route path='/login' element={<Login setToken={setToken}/>} />
                    <Route path='/create-user' element={<CreateUser />} />
                </Routes>
            </Container>

            <Footer />
        </Router>
    )

}

export default Home;