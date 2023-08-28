import Message from '../../layout/Message'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LinkButton from '../../form/LinkButton'
import styles from './styles/Transactions.module.css'
import Container from '../../layout/Container'
import TransactionCard from './TransactionCard'
import Loading from '../../layout/Loading'

function Transactions() {

    const [transactions, setTransactions] = useState([])
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

        fetch(`http://localhost:8080/transacton/${id}`, deleteOptions)
    }

    useEffect(() => {
        const getOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        fetch('http://localhost:8080/transaction', getOptions)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setTransactions(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1>Transações</h1>
                <LinkButton to='/create-transaction' text='Cadastrar' />
            </div>

            <div className={styles.loader_container}>
                {!removeLoading && <Loading />}
            </div>

            {message && <Message message={message} type='success' />}
            <Container customClass='start'>
                {transactions.length === 0 && (
                    <p>Nenhuma transação encontrada</p>
                )}

                {transactions.length > 0 && (
                    transactions.map(transaction => (
                        <TransactionCard
                            id={transaction.id}
                            description={transaction.description}
                            amount={transaction.amount}
                            transactionType={transaction.transactionType}
                            eventDate={transaction.eventDate}
                            eventTime={transaction.eventTime}
                            bankAccountId={transaction.bankAccountId}
                            handleRemove={remove}
                        />
                    ))
                )}
            </Container>
        </div>
    )

}

export default Transactions