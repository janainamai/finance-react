import { useState } from "react";
import SubmitButton from "../form/SubmitButton";

function Login() {

    function login() {
        console.log('Login')
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Faça login</h1>

            <form onSubmit={login}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Digite o seu email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <SubmitButton event={login} text="Entrar"/>
            </form>
        </div>
    )

}

export default Login;