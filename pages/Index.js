import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import PriceTable from "../components/PriceTable/PriceTable";
import Controls from "../components/PriceTable/Controls";
import styles from "./Index.module.css";
import Head from "next/head";

const LivePrices = (props) => {
  return (
    <Layout>
      <Head>
        <title>CoinStats Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Hero />
        <Controls />
        <PriceTable />
      </div>
    </Layout>
  );
};

export default LivePrices;
