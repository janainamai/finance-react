import styles from './styles/Welcome.module.css'
import LinkButton from '../../form/LinkButton.jsx';

function WelcomeDashboard() {

    return (

        <section className={styles.home_container}>

            <h2>Bem-vindo <span>amigo!</span></h2>
            <p>O que deseja fazer hoje?</p>
            <div className={styles.buttons}>
                <LinkButton to='/bank-accounts' text='Conta bancária' />
                <LinkButton to='/transactions' text='Transação' />
            </div>

        </section>
    )

}

export default WelcomeDashboard;