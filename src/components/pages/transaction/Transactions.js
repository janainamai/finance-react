import Message from '../../layout/Message'
import { useLocation, useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()

    function retrieveAll() {
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
    }

    function remove(transaction) {
        const deleteOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        const url = `http://localhost:8080/transaction/${transaction.id}`

        fetch(url, deleteOptions)
        .then(() => {
            retrieveAll()
            navigate('/transaction')
        })
    }

    useEffect(() => {
        retrieveAll()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1>Transações</h1>
            </div>

            <div className={styles.loader_container}>
                {!removeLoading && <Loading />}
            </div>

            {location?.state?.message && <Message message={location.state.message} type={location.state.type} />}
            <Container customClass='start'>
                {transactions.length === 0 && (
                    <p>Não existem transações cadastradas</p>
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
                            bankAccountName={transaction.bankAccountName}
                            handleRemove={remove}
                        />
                    ))
                )}
            </Container>
        </div>
    )

}

export default Transactions