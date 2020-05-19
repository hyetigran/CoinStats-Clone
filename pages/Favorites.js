import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import PriceTable from "../components/PriceTable/PriceTable";
import Controls from "../components/PriceTable/Controls";
import styles from "./Index.module.css";

const Favorites = (props) => {
  return (
    <Layout>
      <div className={styles.container}>
        <Hero />
        <Controls />
        <PriceTable />
      </div>
    </Layout>
  );
};

export default Favorites;
