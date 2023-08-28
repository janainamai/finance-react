import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LinkButton from '../../form/LinkButton'
import Message from '../../layout/Message'
import Container from '../../layout/Container'
import styles from './styles/BankAccount.module.css'
import BankAccountCard from './BankAccountCard'
import Loading from '../../layout/Loading'

function BankAccount() {

    const [accounts, setAccounts] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    function remove(id) {
        const deleteOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        fetch(`http://localhost:8080/bank/${id}`, deleteOptions)
    }

    useEffect(() => {
        const getOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        fetch('http://localhost:8080/bank', getOptions)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setAccounts(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1>Contas bancárias</h1>
                <LinkButton to='/create-bank-account' text='Criar conta bancária' />
            </div>

            <div className={styles.loader_container}>
                {!removeLoading && <Loading />}
            </div>

            {message && <Message message={message} type='success' />}
            <Container customClass='start'>

                {accounts.length > 0 &&
                    accounts.map(account => (
                        <BankAccountCard
                            id={account.id}
                            name={account.name}
                            description={account.description}
                            totalBalance={account.totalBalance}
                            key={account.id}
                            active={account.active}
                            handleRemove={remove}
                        />
                    ))
                }

                {removeLoading && accounts.length === 0 && (
                    <p>Não existem contas bancárias cadastradas</p>
                )}

            </Container>
        </div>
    )
}

export default BankAccount