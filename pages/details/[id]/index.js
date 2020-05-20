import { useState } from "react";
import { useRouter } from "next/router";
import fetcher from "../../../util/fetcher";
import styles from "./index.module.css";
import Layout from "../../../components/Layout";

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
    flex: 0.5,
    margin: "auto",
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
  return (
    <Layout>
      <section className={styles.detailContainer}>
        <div>
          <div className={styles.icons}>
            <img src={icon} />
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
          <div className={styles.primaryStats}>
            <p>
              {name} ({symbol}) <span>{rank}</span>
            </p>
            <div>
              <h2>{price}</h2>
              <p>{priceChange1d}</p>
            </div>
            <div>
              <p>฿{priceBtc}</p>
              <p>{priceChange1h}</p>
            </div>
          </div>
          <div className={styles.marketCol}>
            <div>
              <p>market cap</p>
              <p>{marketCap}</p>
            </div>
            <div>
              <p>volume 24h</p>
              <p>{volume}</p>
            </div>
          </div>
          <div className={styles.supplyCol}>
            <div>
              <p>available supply</p>
              <p>{availableSupply}</p>
            </div>
            <div>
              <p>total supply</p>
              <p>{totalSupply}</p>
            </div>
          </div>
          <div className={styles.websiteCol}>
            <a href={websiteUrl}>Website</a>
            <a href={twitterUrl}>Twitter</a>
          </div>
          <div className={styles.explorerCol}>
            {exp.map((el, i) => {
              return <a href={el}>{`Explorer ${i + 1}`}</a>;
            })}
          </div>
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
