import { useState } from "react";
import { useRouter } from "next/router";
import fetcher from "../../../util/fetcher";
import styles from "./index.module.css";
import Layout from "../../../components/Layout";
import { nFormatter as formatter } from "../../../util/formatter";
export default function Details({ coin }) {
  const {
    name,
    icon,
    symbol,
    rank,
    price,
    priceBtc,
    priceChange1d,
    priceChange1h,
    marketCap,
    volume,
    availableSupply,
    totalSupply,
    websiteUrl,
    twitterUrl,
    exp,
  } = coin;
  const [isFav, setIsFav] = useState(false);
  console.log(coin);
  const router = useRouter();
  const { id } = router.query;

  const iconStyle = {
    color: "#ffffff",
    flex: 1,
    margin: "auto",
    textAlign: "center",
  };
  const favHandleChange = () => {
    //getting coins from local storage or empty array
    var storedCoins = JSON.parse(localStorage.getItem("coins")) || {};
    if (!isFav) {
      //adding id of coin to stored coins
      storedCoins[id] = 1;
    } else {
      //remove coin from local storage
      delete storedCoins[id];
    }
    //saving updated stored coins to local storage
    localStorage.setItem("coins", JSON.stringify(storedCoins));
    setIsFav(!isFav);
  };
  let change1d = priceChange1d < 1 ? styles.clrDown : styles.clrUp;
  let change1h = priceChange1h < 1 ? styles.clrDown : styles.clrUp;

  return (
    <Layout>
      <section className={styles.detailContainer}>
        <div className={styles.icons}>
          <img src={icon} />
          <div style={{ margin: "0 auto" }}>
            {isFav ? (
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
          </div>
        </div>
        <div className={styles.primaryStats}>
          <p>
            {name} ({symbol}) <span>{rank}</span>
          </p>
          <div>
            <h2>${price > 1 ? price.toFixed(2) : price.toFixed(6)}</h2>
            <p className={change1d}>{priceChange1d}</p>
          </div>
          <div>
            <p>฿{priceBtc.toFixed(8)}</p>
            <p className={change1h}>{priceChange1h}</p>
          </div>
        </div>
        <div className={styles.marketCol}>
          <div>
            <p className={styles.title}>market cap</p>
            <p>${formatter(marketCap, 1)}</p>
          </div>
          <div>
            <p className={styles.title}>volume 24h</p>
            <p>${formatter(volume, 1)}</p>
          </div>
        </div>
        <div className={styles.supplyCol}>
          <div>
            <p className={styles.title}>available supply</p>
            <p>{formatter(availableSupply, 1)}</p>
          </div>
          <div>
            <p className={styles.title}>total supply</p>
            <p>{formatter(totalSupply, 1)}</p>
          </div>
        </div>
        <div className={styles.websiteCol}>
          <a href={websiteUrl}>Website</a>
          <a href={twitterUrl}>Twitter</a>
        </div>
        <div className={styles.websiteCol}>
          {exp.map((el, i) => {
            return <a href={el}>{`Explorer ${i + 1}`}</a>;
          })}
        </div>
      </section>
    </Layout>
  );
}

Details.getInitialProps = async ({ query }) => {
  let data = await fetcher(
    `https://api.coinstats.app/public/v1/coins/${query.id}?currency=USD`
  );
  let { coin } = await data;
  return {
    coin,
  };
};
