import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarHome from '../layout/NavbarHome.jsx';
import Footer from '../layout/Footer.jsx';
import CreateUser from './auth/CreateUser.jsx';
import Login from './auth/Login.jsx';

import Container from '../layout/Container.jsx'
import WelcomeHome from './welcome/WelcomeHome.jsx';


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