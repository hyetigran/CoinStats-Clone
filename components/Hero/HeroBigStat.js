import styles from "./Hero.module.css";

const HeroBigStat = ({ title, number, percent }) => {
  let changeColor = percent.charAt(0) === "-" ? styles.clrDown : styles.clrUp;

  return (
    <li className={styles.heroBigStat}>
      <span>{title}</span>
      <div className={styles.stat}>
        <p>{number}</p>
        <p className={changeColor}>{percent}</p>
      </div>
    </li>
  );
};

export default HeroBigStat;
