import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarDashboard from '../layout/NavbarDashboard';
import WelcomeDashboard from './welcome/WelcomeDashboard'
import Footer from '../layout/Footer';
import BankAccount from './bank-account/BankAccount';

import Container from '../layout/Container'
import Transactions from './transaction/Transactions';
import CreateTransaction from './transaction/CreateTransaction';
import CreateBankAccount from './bank-account/CreateBankAccount';


function Dashboard() {

    return (
        <Router>
            <NavbarDashboard />

            <Container customClass='min-height'>
                <Routes>
                    <Route path='/finance/dashboard' element={<WelcomeDashboard />}/>
                    <Route path='/bank-account' element={<BankAccount />} />
                    <Route path='/create-bank-account' element={<CreateBankAccount />} />
                    <Route path='/transaction' element={<Transactions />} />
                    <Route path='/create-transaction' element={<CreateTransaction />} />
                </Routes>
            </Container>
                    
            <Footer />
        </Router>
    )
}

export default Dashboard