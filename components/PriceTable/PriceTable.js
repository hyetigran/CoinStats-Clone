import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import useSWR, { useSWRPages } from "swr";
import fetcher from "../../util/fetcher";
import useOnScreen from "../../util/useOnScreen";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { filterFavorites } from "../../util/filterFavorites";
import { fetchFavorites } from "../../util/fetchFavorites";
import Empty from "../Empty";

const PriceTable = (props) => {
  const { pages, loadMore } = useSWRPages(
    "cryptocurrency-list",
    ({ offset, withSWR }) => {
      if (props.url === "/favorites") return;
      const { data } = withSWR(
        useSWR(
          `https://api.coinstats.app/public/v1/coins?skip=${offset}&limit=10&currency=USD`,
          fetcher
        )
      );
      if (!data) return null;

      const { coins } = data;
      return coins.map((coin) => {
        return <TableRow key={coin.id} coin={coin} />;
      });
    },
    (SWR) => {
      let length = SWR.data.coins.length;
      return SWR.data.coins[length - 1].rank;
    },
    []
  );

  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(true);
  const $loadMoreButton = useRef(null);
  const isOnScreen = useOnScreen($loadMoreButton, "200px");

  useEffect(() => {
    if (!infiniteScrollEnabled || !isOnScreen) return;
    loadMore();
  }, [infiniteScrollEnabled, isOnScreen]);

  let coins = fetchFavorites(props.url);

  return (
    <div>
      <TableHeading />
      {props.url !== "/favorites" ? (
        pages
      ) : coins.length ? (
        coins.map((coin) => {
          return <TableRow key={coin.id} coin={coin} url={props.url} />;
        })
      ) : (
        <Empty />
      )}
      <footer
        ref={$loadMoreButton}
        onClick={() => {
          loadMore();
          setInfiniteScrollEnabled(true);
        }}
      />
    </div>
  );
};

export default PriceTable;
