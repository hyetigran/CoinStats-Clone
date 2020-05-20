import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import PriceTable from "../components/PriceTable/PriceTable";
import Controls from "../components/PriceTable/Controls";
import styles from "./Index.module.css";
import { useRouter } from "next/router";
import { fetchFavorites } from "../util/fetchFavorites";

const Favorites = () => {
  const [favCoin, setFavCoin] = useState([]);
  let url = useRouter().pathname;

  const getFavorites = async () => {
    let coinsFetched = await fetchFavorites(url);
    setFavCoin(coinsFetched);
  };
  useEffect(() => {
    if (url !== "/favorites") return;
    else if (url === "/favorites") {
      getFavorites();
    }
  }, [url]);
  console.log(favCoin);

  return (
    <Layout>
      <div className={styles.container}>
        <Hero />
        <Controls />
        <PriceTable favCoin={favCoin} url={url} />
      </div>
    </Layout>
  );
};

export default Favorites;

// Favorites.getInitialProps = async ({ pathname }) => {
//   let favCoin = await fetchFavorites(pathname);
//   return {
//     favCoin,
//   };
// };
