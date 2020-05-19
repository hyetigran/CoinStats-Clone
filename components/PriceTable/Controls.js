import styles from "./PriceTable.module.css";
import ActiveLink from "../ActiveLink";
const Controls = (props) => {
  return (
    <ul className={styles.controlContainer}>
      <li className={styles.btnControl}>
        <ActiveLink href="/">cryptocurrency</ActiveLink>
      </li>
      <li className={styles.btnControl}>
        <ActiveLink href="/exchange">exchanges</ActiveLink>
      </li>
      <li className={styles.btnControl}>
        <ActiveLink href="/favorites">favorites</ActiveLink>
      </li>
    </ul>
  );
};

export default Controls;
