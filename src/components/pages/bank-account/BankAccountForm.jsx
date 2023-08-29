import { useState } from "react"
import Input from "../../form/Input"
import SubmitButton from "../../form/SubmitButton"
import styles from './styles/BankAccountForm.module.css'
import ToggleSwitch from "../../form/ToggleSwitch"

function BankAccountForm({ handleSubmit, buttonText, accountData }) {

    const [account, setAccount] = useState(accountData || {})

    const submit = (e) => {
        e.preventDefault()

        handleSubmit(account)
    }

    function handleChange(e) {
        setAccount({ ...account, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome:'
                name='name'
                placeholder='Digite o nome'
                handleOnChange={handleChange}
                value={account.name}
            />
            <Input
                type='text'
                text='Descrição:'
                name='description'
                placeholder='Digite a descrição'
                handleOnChange={handleChange}
                value={account.description}
            />
            {buttonText !== 'Cadastrar' &&
                <ToggleSwitch
                    name='active'
                    label='Conta ativa:'
                    option={account.active}
                    handleChange={handleChange}
                />
            }

            <SubmitButton text={buttonText} />

        </form>
    )
}

export default BankAccountForm