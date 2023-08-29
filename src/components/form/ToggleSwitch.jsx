import styles from './styles/ToggleSwitch.module.css'

function ToggleSwitch({ name, label, option, handleChange }) {

  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>

      <div className={styles.options}>
        <div className={styles.option}>
          <input 
            type='radio' 
            name='active' 
            value={true}
            defaultChecked={option === true}
            onChange={handleChange}
          />
          <p>Ativa</p>
        </div>

        <div className={styles.option}>
          <input 
            type='radio' 
            name='active' 
            value={false}
            defaultChecked={option === false}
            onChange={handleChange}
          />
          <p>Inativa</p>
        </div>
      </div>
    </div>
  );

}

export default ToggleSwitch;
