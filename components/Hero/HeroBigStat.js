import styles from "./Hero.module.css";

const HeroBigStat = ({ title, number, percent }) => {
  return (
    <div className={styles.heroBigStat}>
      <p>{title}</p>
      <div className={styles.stat}>
        <p>{number}</p>
        <p>{percent}</p>
      </div>
    </div>
  );
};

export default HeroBigStat;
