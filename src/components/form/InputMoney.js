import styles from './styles/InputMoney.module.css'

function InputMoney({type, text, name, placeholder, handleOnChange, step, min, value}) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
                <input
                    required
                    type={type}
                    id={name}
                    name={name}
                    step={step}
                    min={min}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                />
        </div>
    )
    
}

export default InputMoney