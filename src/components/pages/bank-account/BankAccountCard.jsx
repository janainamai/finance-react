import styles from './styles/BankAccountCard.module.css'
import { Link } from 'react-router-dom'
import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import { TbBrandCashapp } from 'react-icons/tb'

function BankAccountCard({ id, name, description, totalBalance, active, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove({ id })
    }

    function formatValue(totalBalance) {
        return parseFloat(totalBalance).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    return (
        <div className={styles.card}>
            <h4>{name}</h4>
            <p>
                <span>Descrição:</span> {description}
            </p>
            <p>
                <span>Valor total:</span> {formatValue(totalBalance)}
            </p>
            <p className={styles.active_text}>
                <span className={`${styles[active]}`}></span> Conta {active === true ? 'ativa' : 'desativada'}
            </p>

            <div className={styles.card_actions}>
                <Link to={{
                    pathname: '/create-transaction',
                    search: `?bankAccountId=${id}&bankAccountName=${name}`}}>
                    <TbBrandCashapp />Transação
                </Link>
                <Link to={`/bank-account/${id}`} >
                    <BsPencil />Edit
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill />Excluir
                </button>
            </div>
        </div>

    )

}

export default BankAccountCard