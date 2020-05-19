import styles from "./PriceTable.module.css";

const TableHeading = (props) => {
  return (
    <div className={styles.tableHeading}>
      <p className={styles.rankCol}>#</p>
      <p className={styles.nameCol}>name</p>
      <p className={styles.changeCol}> 24h change</p>
      <p className={styles.priceCol}>price</p>
      <p className={styles.pbtcCol}>price in btc</p>
      <p className={styles.mcapCol}>market cap</p>
      <p className={styles.volCol}>volume 24h</p>
    </div>
  );
};

export default TableHeading;
