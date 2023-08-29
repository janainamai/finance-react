import styles from './styles/Welcome.module.css'
import savings from '../../../images/savings.svg'
import LinkButton from '../../form/LinkButton.jsx';

function WelcomeHome() {

    return (

        <section className={styles.home_container}>

            <h1>Bem-vindo ao <span>Finance</span></h1>
            <p>Faça a gestão da sua renda de forma sustentável!</p>
            <LinkButton to='/create-user' text='Cadastre-se' />
            <img src={savings} alt='Finance' />

        </section>
    )

}

export default WelcomeHome;