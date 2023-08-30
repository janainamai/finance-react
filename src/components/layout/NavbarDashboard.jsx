import { Link, useNavigate } from 'react-router-dom'

import Container from './Container.jsx'

import styles from './styles/Navbar.module.css'
import logo from '../../images/costs_logo.png'


function NavbarDashboard() {

    const navigate = useNavigate()

    function deleteToken() {
        localStorage.setItem('token', '')

        navigate('/')
    }

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link className={styles.image} to={'/finance/dashboard'}>
                    <img src={logo} alt='Finance' />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/bank-accounts'>Conta bancária</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/transactions'>Transação</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/' onClick={deleteToken}>Sair</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavbarDashboard