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
  console.log(typeof priceChange1d);
  let changeColor = priceChange1d < 1 ? styles.clrDown : styles.clrUp;
  return (
    <div className={styles.tableRow}>
      <p className={styles.rankCol}>{rank}</p>
      <div className={styles.nameCol}>
        <div className={styles.icon}>
          <img src={icon} />
        </div>
        <p>{name}</p>
        <span> • {symbol}</span>
      </div>
      <p className={styles.changeCol + " " + changeColor}>{priceChange1d}%</p>
      <p className={styles.priceCol}>
        ${price > 1 ? price.toFixed(2) : price.toFixed(6)}
      </p>
      <p className={styles.pbtcCol}>{priceBtc.toFixed(8)}</p>
      <p className={styles.mcapCol}>${formatter(marketCap, 1)}</p>
      <p className={styles.volCol}>${formatter(volume, 1)}</p>
    </div>
  );
};

export default TableRow;
