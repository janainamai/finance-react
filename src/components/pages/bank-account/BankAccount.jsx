import styles from './styles/BankAccount.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../../layout/Loading.jsx'
import Container from '../../layout/Container.jsx'

function BankAccount() {

    const [removeLoading, setRemoveLoading] = useState(false)

    const { id } = useParams()
    const [account, setAccount] = useState([])

    useEffect(() => {
        setRemoveLoading(false)

        fetch(`http://localhost:8080/bank/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setAccount(data)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setRemoveLoading(true)
            })
    }, [id])


    return (
        <>
            {account.name ? (
                <div>
                    <Container customClass='column'>
                        <div>
                            <h1>Conta bancária: {account.name}</h1>
                            <button>Editar</button>
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default BankAccount