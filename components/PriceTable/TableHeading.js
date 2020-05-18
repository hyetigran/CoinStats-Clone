import styles from "./PriceTable.module.css";

const TableHeading = (props) => {
  return (
    <div className={styles.tableHeading}>
      <p>#</p>
      <p>name</p>
      <p>24h change</p>
      <p>price</p>
      <p>price in btc</p>
      <p>market cap</p>
      <p>volume 24h</p>
      <p>price graph (7d)</p>
    </div>
  );
};

export default TableHeading;
