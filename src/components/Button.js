import styles from "./Button.module.css";


function Button({ text, iconimg }) {
 return (
  <button className={styles.button}>
   <div class="svg-wrapper-1">
    <div class="svg-wrapper d-flex justify-content-center">
      <img src={iconimg} alt="icon" className={styles.iconImg} />
     <span>{text}</span>
    </div>
   </div>
  </button>
 );
}

export default Button;
