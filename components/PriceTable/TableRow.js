import { useState } from "react";
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

  const [isHovered, setIsHovered] = useState(false);
  const [isFav, setIsFav] = useState(false);
  let changeColor = priceChange1d < 1 ? styles.clrDown : styles.clrUp;
  const iconStyle = {
    color: "#ffffff",
    flex: 0.5,
    margin: "auto",
  };
  const favHandleChange = () => {
    //getting coins from local storage or empty array
    var storedCoins = JSON.parse(localStorage.getItem("coins")) || [];
    if (!isFav) {
      //adding id of coin to stored coins
      storedCoins = [...storedCoins, id];
    } else {
      //remove coin from local storage
      storedCoins = storedCoins.filter((el) => el !== id);
    }
    //saving updated stored coins to local storage
    localStorage.setItem("coins", JSON.stringify(storedCoins));
    setIsFav(!isFav);
  };
  console.log(id, isFav);

  return (
    <div
      className={styles.tableRow}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      {!isHovered ? (
        <p className={styles.rankCol}>{rank}</p>
      ) : isFav ? (
        <i
          style={iconStyle}
          className="fas fa-star"
          onClick={() => favHandleChange()}
        ></i>
      ) : (
        <i
          style={iconStyle}
          className="far fa-star"
          onClick={() => favHandleChange()}
        ></i>
      )}
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
