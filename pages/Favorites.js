import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import PriceTable from "../components/PriceTable/PriceTable";
import Controls from "../components/PriceTable/Controls";
import styles from "./Index.module.css";
import { useRouter } from "next/router";

const Favorites = () => {
  let url = useRouter().pathname;

  return (
    <Layout>
      <div className={styles.container}>
        <Hero />
        <Controls />
        <PriceTable url={url} />
      </div>
    </Layout>
  );
};

export default Favorites;
