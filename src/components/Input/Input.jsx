import styles from "./Input.module.css";

const Input = ({ value, onChangeHandler }) => {
  return (
    <input
      className={styles.bgColor}
      type="text"
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
