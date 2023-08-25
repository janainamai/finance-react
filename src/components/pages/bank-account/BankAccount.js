import LinkButton from '../../form/LinkButton'

function BankAccount() {

    return (
        <div>
            <h1>Conta bancária</h1>
            <LinkButton to='/create-bank-account' text='Cadastrar'/>
        </div>
        
    )

}

export default BankAccount