import styles from "./Button.module.css";


function Button({ text, iconimg }) {
  return (
    <button className={styles.button}>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper d-flex justify-content-center">
          <img src={iconimg} alt="icon" className={styles.iconImg} />
          <span>{text}</span>
        </div>
      </div>
    </button>
  );
}

export default Button;
