import { useNavigate } from 'react-router-dom'
import styles from './styles/CreateBankAccount.module.css'
import BankAccountForm from "./BankAccountForm.jsx"

function CreateBankAccount() {

    const navigate = useNavigate()

    function create(account) {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(account),
        }

        fetch('http://localhost:8080/bank', postOptions)
            .then(data => {
                navigate('/bank-accounts', { state: { message: 'Conta bancária cadastrada com sucesso!', type: 'success' } })
            })
            .catch((err) => console.log(err))

    }

    return (
        <div className={styles.new_bank_account_container}>
            <h1>Cadastrar conta bancária</h1>
            <p>Cadastre uma conta bancária para gerenciar sua renda</p>

            <BankAccountForm handleSubmit={create} buttonText='Cadastrar' />

        </div>
    )
}

export default CreateBankAccount