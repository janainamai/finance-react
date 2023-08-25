import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './styles/Navbar.module.css'
import logo from '../../images/costs_logo.png'

function NavbarDashboard() {

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to={'/finance/dashboard'}>
                    <img src={logo} alt='Finance' />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/bank-account'>Conta bancária</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/transaction'>Transação</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavbarDashboard