import styles from './styles/Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
                <input
                    required
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    autoComplete='off'
                    onChange={handleOnChange}
                    value={value}
                />
        </div>
    )
    
}

export default Input