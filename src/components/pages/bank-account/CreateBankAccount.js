import { useState } from "react"
import { Navigate } from 'react-router-dom'
import Input from "../../form/Input"
import SubmitButton from "../../form/SubmitButton"
import styles from './styles/NewBankAccount.module.css'

function CreateBankAccount() {

    const [bankAccount, setBankAccount] = useState()

    function handleChange(e) {
        setBankAccount({ ...bankAccount, [e.target.name]: e.target.value })
    }

    function create(e) {
        
        const postOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' ,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(bankAccount),
        }

        fetch('http://localhost:8080/bank', postOptions)
            .then(response => response.json())
            .then(data => {
                <Navigate to='/bank-account'/>
            })
            .catch((err) => console.log(err))

    }

    return (
        <div className={styles.new_bank_account_container}>
            <h1>Cadastrar conta bancária</h1>
            <p>Cadastre uma conta bancária para gerenciar sua renda</p>

            <form onSubmit={create}>
                <Input
                    type='text'
                    text='Nome'
                    name='name'
                    placeholder='Digite o nome'
                    handleOnChange={handleChange}
                />
                <Input
                    type='text'
                    text='Descrição'
                    name='description'
                    placeholder='Digite a descrição'
                    handleOnChange={handleChange}
                />

                <SubmitButton text="Cadastrar" />

            </form>

        </div>
    )
}

export default CreateBankAccount