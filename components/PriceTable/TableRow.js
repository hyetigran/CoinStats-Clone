import styles from "./PriceTable.module.css";
import { nFormatter as formatter } from "../../util/formatter";

const TableRow = (props) => {
  const {
    id,
    name,
    icon,
    symbol,
    rank,
    price,
    priceBtc,
    priceChange1d,
    marketCap,
    volume,
  } = props.coin;

  return (
    <div className={styles.tableRow}>
      <p>{rank}</p>
      <div className={styles.nameCol}>
        <div className={styles.icon}>
          <img src={icon} />
        </div>
        <p>{name}</p>
        <span>{symbol}</span>
      </div>
      <p>{priceChange1d}</p>
      <p>{price > 1 ? price.toFixed(2) : price.toFixed(6)}</p>
      <p>{priceBtc.toFixed(8)}</p>
      <p>{formatter(marketCap, 1)}</p>
      <p>{formatter(volume, 1)}</p>
      <p>price graph (7d)</p>
    </div>
  );
};

export default TableRow;
