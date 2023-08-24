import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../images/costs_logo.png'

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to={'/'}>
                    <img src={logo} alt='Finance' />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/cadastrar'>Cadastrar</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/bankAccount'>Conta bancária</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar