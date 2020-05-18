import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import PriceTable from "../components/PriceTable/PriceTable";
import Controls from "../components/PriceTable/Controls";
import styles from "./Index.module.css";

const LivePrices = (props) => {
  console.log("props", props);
  return (
    <Layout>
      <div className={styles.container}>
        <Hero />
        <Controls />
        <PriceTable coins={props.data.coins} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD`
  );
  console.log(res);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default LivePrices;
