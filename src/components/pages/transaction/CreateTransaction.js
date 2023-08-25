import TransactionForm from "./TransactionForm"
import { useNavigate } from 'react-router-dom'
import styles from './styles/NewTransaction.module.css'

function CreateTransaction() {

    const navigate = useNavigate()

    function create(transaction) {

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(transaction),
        }

        fetch('http://localhost:8080/transaction', postOptions)
            .then(response => response.json())
            .then((data) => {
                navigate('/transaction')
            })
            .catch((err) => console.log(err))

    }

    return (
        <div className={styles.new_transaction_container}>
            <h1>Cadastrar transação</h1>
            <p>Cadastre uma transação de débito/crédito para ser calculado no valor total da conta bancária desejada</p>
            <TransactionForm handleSubmit={create} buttonText='Cadastrar' />
        </div>
    )

}

export default CreateTransaction