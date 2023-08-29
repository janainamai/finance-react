import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarDashboard from '../layout/NavbarDashboard.jsx';
import WelcomeDashboard from './welcome/WelcomeDashboard.jsx'
import Footer from '../layout/Footer.jsx';
import BankAccounts from './bank-account/BankAccounts.jsx';

import Container from '../layout/Container.jsx'
import Transactions from './transaction/Transactions.jsx';
import CreateTransaction from './transaction/CreateTransaction.jsx';
import CreateBankAccount from './bank-account/CreateBankAccount.jsx';
import BankAccount from './bank-account/BankAccount.jsx';
import Transaction from './transaction/Transaction.jsx';


function Dashboard() {

    return (
        <Router>
            <NavbarDashboard />

            <Container customClass='min-height'>
                <Routes>
                    <Route path='/finance/dashboard' element={<WelcomeDashboard />}/>

                    <Route path='/bank-account/:id' element={<BankAccount />} />
                    <Route path='/bank-accounts' element={<BankAccounts />} />
                    <Route path='/create-bank-account' element={<CreateBankAccount />} />

                    <Route path='/transaction' element={<Transaction />} />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/create-transaction' element={<CreateTransaction />} />
                </Routes>
            </Container>
                    
            <Footer />
        </Router>
    )
}

export default Dashboard