import { Link } from 'react-router-dom'

import Container from './Container.jsx'

import styles from './styles/Navbar.module.css'
import logo from '../../images/costs_logo.png'

function NavbarHome() {

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to={'/finance/home'}>
                    <img src={logo} alt='Finance' />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/finance/home'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/create-user'>Cadastrar</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavbarHome