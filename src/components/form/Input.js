import styles from './styles/Input.module.css'

function Input({type, text, name, placeholder, handleOnChange}) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
                <input
                    required
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                />
        </div>
    )
    
}

export default Input