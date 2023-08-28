import { useState } from "react"
import Input from "../../form/Input"
import InputMoney from "../../form/InputMoney"
import Select from "../../form/Select"
import SubmitButton from "../../form/SubmitButton"
import InputDate from "../../form/InputDate"
import InputTime from "../../form/InputTime"
import styles from './styles/TransactionForm.module.css'

function TransactionForm({ handleSubmit, buttonText, transactionData, bankAccountId, bankAccountName}) {

    const [transaction, setTransaction] = useState(transactionData || {})

    const transactionTypes = {
        DEBIT: 'Débito',
        CREDIT: 'Crédito'
    };

    const submit = (e) => {
        e.preventDefault()

        handleSubmit(transaction)
    }

    function handleChange(e) {
        setTransaction({ ...transaction, [e.target.name]: e.target.value })
    }

    function handleChangeType(event) {
        const newType = event.target.value;

        setTransaction(prevTransaction => ({
            ...prevTransaction, transactionType: newType
        }))
    }

    return (
        <form onSubmit={submit} className={styles.form}>

            <Input
                type='text'
                text='Descrição'
                name='description'
                placeholder='Digite a descrição'
                handleOnChange={handleChange}
                value={transaction.description}
            />
            <InputMoney
                type='text'
                text='Valor'
                name='amount'
                step='0.01'
                min='0'
                placeholder='R$'
                handleOnChange={handleChange}
                value={transaction.amount}
            />
            <Select
                text='Tipo da transação'
                name='transactionType'
                transactionTypes={transactionTypes}
                handleOnChange={handleChangeType}
                value={transaction.transactionType}
            />
            <InputDate
                text='Data'
                name='eventDate'
                handleOnChange={handleChange}
                value={transaction.eventDate}
            />
            <InputTime
                text='Hora'
                name='eventTime'
                handleOnChange={handleChange}
                value={transaction.eventTime}
            />

            <SubmitButton text={buttonText} />

        </form>
    )

}

export default TransactionForm