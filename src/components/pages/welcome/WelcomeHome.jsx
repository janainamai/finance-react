import styles from './styles/Welcome.module.css'
import savings from '../../../images/savings.svg'
import LinkButton from '../../form/LinkButton.jsx';
import { useLocation } from 'react-router-dom';
import Message from '../../layout/Message';

function WelcomeHome() {

    const location = useLocation()

    return (

        <section className={styles.home_container}>
            {location?.state?.message && <Message message={location.state.message} type={location.state.type} />}

            <h1>Bem-vindo ao <span>Finance</span></h1>
            <p>Faça a gestão da sua renda de forma sustentável!</p>
            <LinkButton to='/create-user' text='Cadastre-se' />
            <img src={savings} alt='Finance' />

        </section>
    )

}

export default WelcomeHome;