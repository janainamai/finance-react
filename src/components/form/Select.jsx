import styles from './styles/Select.module.css'

function Select({ text, name, handleOnChange, options, value }) {

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
                {Object.keys(options).map(key => (
                    <option key={key} value={key}>{options[key]}</option>
                ))}
            </select>
        </div>
    )

}

export default Select