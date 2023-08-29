import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LinkButton from '../../form/LinkButton.jsx'
import Message from '../../layout/Message.jsx'
import Container from '../../layout/Container.jsx'
import styles from './styles/BankAccounts.module.css'
import BankAccountCard from './BankAccountCard.jsx'
import Loading from '../../layout/Loading.jsx'

function BankAccounts() {

    const [accounts, setAccounts] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()

    function retrieveAll() {
        setRemoveLoading(false)

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
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setRemoveLoading(true)
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