import styles from './styles/InputDate.module.css'

function InputTime({ text, name, handleOnChange, value }) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                required
                type='time'
                name={name}
                value={value}
                placeholder='00:00:00'
                onChange={handleOnChange}
            />
        </div>
    )

}

export default InputTime