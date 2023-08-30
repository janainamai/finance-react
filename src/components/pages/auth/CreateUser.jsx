import SubmitButton from '../../form/SubmitButton.jsx'
import { useState } from 'react'
import Input from '../../form/Input.jsx'
import styles from './styles/NewUser.module.css'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

    const navigate = useNavigate()
    const [userAccount, setUserAccount] = useState()

    const submit = (e) => {
        e.preventDefault()

        createUser(userAccount)
    }

    function handleChange(e) {
        setUserAccount({ ...userAccount, [e.target.name]: e.target.value })
    }

    function createUser(user) {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        fetch('http://localhost:8080/auth/register', postOptions)
            .then(data => {
                navigate('/finance/home', { state: { message: 'Sua conta foi criada com sucesso, você receberá um email de autorização, aguarde e seja bem vindo!', type: 'success' } })
            })

    }

    return (
        <div className={styles.new_user_container}>
            <h1>Cadastre-se</h1>

            <form onSubmit={submit}>
                <Input
                    type='text'
                    text='Login'
                    name='login'
                    placeholder='Digite o seu login'
                    handleOnChange={handleChange}
                />
                <Input
                    type='email'
                    text='Email'
                    name='email'
                    placeholder='Digite o seu email'
                    handleOnChange={handleChange}
                />
                <Input
                    type='password'
                    text='Senha'
                    name='password'
                    placeholder='Digite a sua senha'
                    handleOnChange={handleChange}
                />
                <Input
                    type='password'
                    text='Confirmação de senha'
                    name='confirmPassword'
                    placeholder='Digite a sua senha novamente'
                    handleOnChange={handleChange}
                />

                <SubmitButton text="Cadastrar" />
            </form>
        </div>
    )
}

export default CreateUser;