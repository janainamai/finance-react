import styles from './styles/TransactionCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { format } from 'date-fns';

function TransactionCard({ id, description, amount, transactionType, eventDate, eventTime, bankAccountId, bankAccountName, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove({ id })
    }

    function formatMoney(amount) {
        return parseFloat(amount).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    function formatDate(date) {
        return format(new Date(date[0], date[1] - 1, date[2]), 'dd/MM/yyyy');
    }

    function formatTime(time) {
        return format(new Date(0, 0, 0, time[0], time[1]), 'HH:mm');
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
                <span>Valor:</span> {formatMoney(amount)}
            </p>
            <p>
                <span>Data:</span> {formatDate(eventDate)}
            </p>
            <p>
                <span>Hora:</span> {formatTime(eventTime)}
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