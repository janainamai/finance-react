import styles from './styles/TransactionCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function TransactionCard({ id, description, amount, transactionType, eventDate, eventTime, bankAccountId, bankAccountName, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove({id})
    }

    return (
        <div className={styles.card}>
            <h4>
                <div className={styles.type_text}>
                    <span className={`${styles[transactionType]}`}></span> {transactionType === 'DEBIT' ? 'Débito' : 'Crédito'}
                </div>
            </h4>
            <p>
                <span>Descrição:</span> {description}
            </p>
            <p>
                <span>Valor:</span> {amount}
            </p>
            <p>
                <span>Data:</span> {eventDate}
            </p>
            <p>
                <span>Hora:</span> {eventTime}
            </p>
            <p>
                <span>Conta bancária:</span> {bankAccountName}
            </p>

            <div className={styles.card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />Excluir
                </button>
            </div>
        </div>

    )

}

export default TransactionCard