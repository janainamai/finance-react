import styles from './styles/Login.module.css'
import SubmitButton from "../../form/SubmitButton.jsx"
import { useState } from "react"
import Input from "../../form/Input.jsx"
import login_img from '../../../images/login.png'
import { useNavigate } from 'react-router-dom'
import Message from '../../layout/Message'

function Login() {

    const navigate = useNavigate()

    const [payload, setPayload] = useState()
    const [errorMessage, setErrorMessage] = useState()

    function handleChange(e) {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }

    function loginUser(e) {
        setErrorMessage()
        e.preventDefault()

        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        }

        fetch('http://localhost:8080/auth/login', postOptions)
            .then(response => response.json())
            .then((data) => {
                localStorage.setItem('token', data.token);
                navigate('/bank-accounts')
            })
            .catch((err) => {
                setErrorMessage('Login e/ou senha estão incorretos')
            })

    }

    return (
        <div className={styles.login_container}>
            <img src={login_img} alt='Login do usuário' />

            <div className={styles.message}>
                {errorMessage && <Message message={errorMessage} type={'error'} />}
            </div>

            <form className={styles.form} onSubmit={loginUser}>
                <Input
                    type='text'
                    text='Login'
                    name='login'
                    placeholder='Digite o seu login'
                    handleOnChange={handleChange}
                />

                <Input
                    type='password'
                    text='Senha'
                    name='password'
                    placeholder='Digite a sua senha'
                    handleOnChange={handleChange}
                />

                <SubmitButton text="Entrar" />
            </form>
        </div>
    )

}

export default Login;