import styles from './styles/BankAccount.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../../layout/Loading.jsx'
import Container from '../../layout/Container.jsx'
import BankAccountForm from './BankAccountForm'
import TransactionCard from '../transaction/TransactionCard'
import Message from '../../layout/Message'
import { TbBrandCashapp } from 'react-icons/tb'

function BankAccount() {

    const navigate = useNavigate()
    const location = useLocation()

    const [removeLoadingBankAccount, setRemoveLoadingBankAccount] = useState(false)
    const [removeLoadingTransactions, setRemoveLoadingTransactions] = useState(false)

    const { id } = useParams()
    const [account, setAccount] = useState([])
    const [showAccountForm, setShowAccountForm] = useState(false)

    const [transactions, setTransactions] = useState([])

    const [accountMessage, setAccountMessage] = useState('')
    const [transactionMessage, setTransactionMessage] = useState('')
    const [typeMessage, setTypeMessage] = useState('')

    useEffect(() => {
        if (id) {
            retrieveBankAccount()
            retrieveTransactions()
        }
    }, [id])

    function retrieveBankAccount() {
        setRemoveLoadingBankAccount(false)

        fetch(`http://localhost:8080/bank/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(account => {
                console.log(account)
                setAccount(account)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setRemoveLoadingBankAccount(true)
            })
    }


    function retrieveTransactions() {
        setRemoveLoadingTransactions(false)

        fetch(`http://localhost:8080/transaction/bankAccount/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(resp => resp.json())
            .then(transactions => {
                console.log(transactions)
                setTransactions(transactions)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setRemoveLoadingTransactions(true)
            })
    }

    function remove(account) {
        setRemoveLoadingBankAccount(false)

        const deleteOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        const url = `http://localhost:8080/bank/${id}`

        fetch(url, deleteOptions)
            .then(() => {
                navigate('/bank-accounts', { state: { message: 'Conta bancária removida com sucesso!', type: 'success' } })
            })
            .catch(err => {
                console.log(err)
                setAccountMessage(`Erro ao remover conta bancária: ${err}`)
                setTypeMessage('error')
            })
            .finally(() => {
                setRemoveLoadingBankAccount(true)
            })
    }

    function removeTransaction(transaction) {
        setRemoveLoadingTransactions(false)

        const deleteOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        const url = `http://localhost:8080/transaction/${transaction.id}`

        fetch(url, deleteOptions)
            .then(data => {
                setTransactionMessage('Transação excluída com sucesso!')
                setTypeMessage('success')
            })
            .catch((err) => {
                setTransactionMessage(`Erro ao excluir transação: ${err}`)
                setTypeMessage('error')
            })
            .finally(() => {
                setShowAccountForm(false)
                retrieveBankAccount()
                retrieveTransactions()

                setRemoveLoadingTransactions(true)
            })
    }

    function edit(account) {
        const postOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(account),
        }

        fetch('http://localhost:8080/bank', postOptions)
            .then(data => {
                setAccountMessage('Conta bancária alterada com sucesso!')
                setTypeMessage('success')
            })
            .catch((err) => {
                setAccountMessage(`Erro ao editar conta bancária: ${err}`)
                setTypeMessage('error')
            })
            .finally(() => {
                setShowAccountForm(false)
                setAccount(account)
            })
    }

    function toggleAccountForm() {
        setShowAccountForm(!showAccountForm)
    }

    function formatValue(totalBalance) {
        return parseFloat(totalBalance).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    return (
        <>
            {account.name ? (
                <div className={styles.account_details}>
                    <Container customClass='column'>
                        <div className={styles.details_container}>

                            <h1>Conta bancária {account.name}</h1>

                            <div className={styles.buttons}>
                                <button className={styles.button} onClick={toggleAccountForm}>
                                    {!showAccountForm ? 'Editar' : 'Voltar'}
                                </button>
                                {!showAccountForm &&
                                    <button className={styles.button} onClick={remove} >
                                        {'Excluir'}
                                    </button>
                                }
                            </div>

                            {!showAccountForm ? (
                                <div className={styles.account_info}>
                                    {accountMessage && <Message message={accountMessage} type={typeMessage} />}

                                    <div className={styles.loader_container}>
                                        {!removeLoadingBankAccount && <Loading />}
                                    </div>
                                    <p>
                                        <span>Descrição: </span>{account.description}
                                    </p>
                                    <p>
                                        <span>Valor total: </span>{formatValue(account.totalBalance)}
                                    </p>
                                    <p>
                                        <span>Conta ativa: </span>{account.active === true ? 'sim' : 'não'}
                                    </p>

                                </div>
                            ) : (
                                <div className={styles.account_info}>
                                    <BankAccountForm handleSubmit={edit} buttonText='Salvar' accountData={account} />
                                </div>
                            )}
                        </div>

                        <div className={styles.transaction_form_container}>
                            <div className={styles.transaction_title_buttons}>
                                <div>
                                    <h2>Transações</h2>
                                </div>

                                <div className={styles.buttons}>
                                    <Link to={{
                                        pathname: '/create-transaction',
                                        search: `?bankAccountId=${account.id}&bankAccountName=${account.name}`
                                    }}>
                                        <TbBrandCashapp />Nova transação
                                    </Link>
                                </div>
                            </div>

                            {location?.state?.message && <Message message={location.state.message} type={location.state.type} />}
                            {transactionMessage && <Message message={transactionMessage} type={typeMessage} />}

                            <Container customClass='start'>
                                <div className={styles.loader_container}>
                                    {!removeLoadingTransactions && <Loading />}
                                </div>

                                {transactions.length > 0 &&
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
                                            handleRemove={removeTransaction}
                                        />
                                    ))
                                }

                                {transactions.length === 0 &&
                                    <p>Não existem transações cadastradas</p>
                                }
                            </Container>

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