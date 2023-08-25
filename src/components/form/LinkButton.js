import { Link } from 'react-router-dom'
import styles from './styles/LinkButton.module.css'

function LinkButton({ to, text }) {

    return (
        <Link className={styles.button} to={to}>
            {text}
        </Link>
    )

}

export default LinkButton