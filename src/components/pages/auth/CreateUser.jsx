import SubmitButton from '../../form/SubmitButton.jsx'
import { useState } from 'react'
import Input from '../../form/Input.jsx'
import styles from './styles/NewUser.module.css'

function CreateUser() {

    function createUser(e) {
        e.preventDefault()
        console.log('Login: ', login)
        console.log('Email: ', email)
        console.log('Senha: ', password)
        console.log('Confirmação da senha: ', confirmPassword)
    }

    const [login, setLogin] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    return (
        <div className={styles.new_user_container}>
            <h1>Cadastre-se</h1>
            
            <form onSubmit={createUser}>
                <Input 
                    type='text'    
                    text='Login'
                    name='login'
                    placeholder='Digite o seu login'
                    handleOnChange={setLogin}
                />
                 <Input 
                    type='email'    
                    text='Email'
                    name='email'
                    placeholder='Digite o seu email'
                    handleOnChange={setEmail}
                />
               <Input 
                    type='password'    
                    text='Senha'
                    name='password'
                    placeholder='Digite a sua senha'
                    handleOnChange={setPassword}
                />
                 <Input 
                    type='password'    
                    text='Confirmação de senha'
                    name='confirmPassword'
                    placeholder='Digite a sua senha novamente'
                    handleOnChange={setConfirmPassword}
                />

                <SubmitButton text="Cadastrar"/>
            </form>
        </div>
    )
}

export default CreateUser;