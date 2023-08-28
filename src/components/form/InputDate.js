import styles from './styles/InputDate.module.css'

function InputDate({ text, name, handleOnChange, value }) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                required
                type='date'
                name={name}
                value={value}
                placeholder='YYYY-MM-DD'
                autoComplete='off'
                onChange={handleOnChange}
            />
        </div>
    )

}

export default InputDate