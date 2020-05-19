import useSWR from "swr";
import Router from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import PriceTable from "../components/PriceTable/PriceTable";
import Controls from "../components/PriceTable/Controls";
import styles from "./Index.module.css";

const LivePrices = (props) => {
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

export default LivePrices;
