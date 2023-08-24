import SubmitButton from '../form/SubmitButton'
import { useState } from 'react'

function NewUser() {

    function cadastrarUsuario(e) {
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
        <div>
            <h1>Cadastre-se</h1>
            
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="login">Login:</label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        placeholder="Digite o seu login"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite o seu email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmação de senha</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Digite a sua senha novamente"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <SubmitButton event={cadastrarUsuario} text="Cadastrar"/>
            </form>
        </div>
    )
}

export default NewUser;