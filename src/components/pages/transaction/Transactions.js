import Message from '../../layout/Message'
import { useLocation } from 'react-router-dom'
import LinkButton from '../../form/LinkButton'

function Transactions() {
    
    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    return (
        <div>
            <h1>Transações</h1>
            {message && <Message message={message} type='sucess' />}
            <LinkButton to='/create-transaction' text='Cadastrar'/>
        </div>
    )

}

export default Transactions