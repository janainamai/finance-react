import styles from './styles/Select.module.css'

function Select({ text, name, handleOnChange, transactionTypes, value }) {

    return (
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option>Selecione uma transação</option>
                {Object.keys(transactionTypes).map(key => (
                    <option key={key} value={key}>{transactionTypes[key]}</option>
                ))}
            </select>
        </div>
    )

}

export default Select