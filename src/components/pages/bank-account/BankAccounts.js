import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LinkButton from '../../form/LinkButton'
import Message from '../../layout/Message'
import Container from '../../layout/Container'
import styles from './styles/BankAccount.module.css'
import BankAccountCard from './BankAccountCard'
import Loading from '../../layout/Loading'

function BankAccounts() {

    const [accounts, setAccounts] = useState([])
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

        fetch('http://localhost:8080/bank', getOptions)
            .then(data => data.json())
            .then(data => {
                setAccounts(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
    }

    function remove(account) {
        const deleteOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        const url = `http://localhost:8080/bank/${account.id}`

        fetch(url, deleteOptions)
        .then(() => {
            retrieveAll()
            navigate('/bank-account')
        })
    }

    useEffect(() => {
        retrieveAll()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1>Contas bancárias</h1>
                <LinkButton to='/create-bank-account' text='Cadastrar' />
            </div>

            <div className={styles.loader_container}>
                {!removeLoading && <Loading />}
            </div>

            {location?.state?.message && <Message message={location.state.message} type={location.state.type} />}
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

export default BankAccounts