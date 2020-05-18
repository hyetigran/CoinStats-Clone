import styles from "./PriceTable.module.css";

const Controls = (props) => {
  return (
    <div className={styles.controlContainer}>
      <button className={styles.btnControl}>cryptocurrency</button>
      <button className={styles.btnControl}>exchanges</button>
      <button className={styles.btnControl}>favorites</button>
    </div>
  );
};

export default Controls;
