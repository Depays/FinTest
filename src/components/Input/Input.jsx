import styles from "./Input.module.css";

const Input = ({ labelTitle = "", htmlFor = "", type, name, placeholder }) => {
  return (
    <p className={styles.formItem}>
      {labelTitle === "" ? null : (
        <label className={styles.inputLabel} htmlFor={htmlFor}>
          {labelTitle}
        </label>
      )}

      <input
        className={styles.formInput}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </p>
  );
};

export default Input;
