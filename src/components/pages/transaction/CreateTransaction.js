import TransactionForm from "./TransactionForm"
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './styles/CreateTransaction.module.css'

function CreateTransaction() {

    const navigate = useNavigate()

    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const bankAccountId = params.get('bankAccountId')
    const bankAccountName = params.get('bankAccountName')

    function create(transaction) {
        transaction.bankAccountId = bankAccountId;

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(transaction),
        }

        fetch('http://localhost:8080/transaction', postOptions)
            .then((data) => {
                navigate('/transaction', { state: { message: "Transação cadastrada com sucesso!", type: 'success' } })
            })
            .catch((err) => console.log(err))

    }

    return (
        <div className={styles.new_transaction_container}>
            <h1>Cadastrar transação</h1>
            <br/>
            <p>Conta bancária: {bankAccountName}</p>

            <TransactionForm handleSubmit={create} buttonText='Cadastrar' bankAccountId={bankAccountId} bankAccountName={bankAccountName} />
        </div>
    )

}

export default CreateTransaction