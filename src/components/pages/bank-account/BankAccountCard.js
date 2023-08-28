import styles from './styles/BankAccountCard.module.css'
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { TbBrandCashapp } from 'react-icons/tb'

function BankAccountCard({ id, name, description, totalBalance, active, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove({id})
    }

    return (
        <div className={styles.card}>
            <h4>{name}</h4>
            <p>
                <span>Descrição:</span> {description}
            </p>
            <p>
                <span>Valor total:</span> {totalBalance}
            </p>
            <p className={styles.active_text}>
                <span className={`${styles[active]}`}></span> Conta {active === true ? 'ativa' : 'desativada'}
            </p>

            <div className={styles.card_actions}>
                <Link to={{
                    pathname: '/create-transaction',
                    search: `?bankAccountId=${id}&bankAccountName=${name}`
                }}>
                    <TbBrandCashapp />Nova transação
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill />Excluir
                </button>
            </div>
        </div>

    )

}

export default BankAccountCard