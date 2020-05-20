import React, { useState, useEffect, useRef } from "react";
import useSWR, { useSWRPages } from "swr";
import fetcher from "../../util/fetcher";
import useOnScreen from "../../util/useOnScreen";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { filterFavorites } from "../../util/filterFavorites";
import Empty from "../Empty";
import Link from "next/link";

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
        let { id } = coin;
        return (
          <Link
            key={coin.id}
            href="/details/[id]"
            as={`/details/${id}`}
            passHref
          >
            <TableRow coin={coin} href={props.href} />
          </Link>
        );
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

  return (
    <div>
      <TableHeading />
      {props.url !== "/favorites" ? (
        pages
      ) : props.favCoin.length ? (
        props.favCoin.map((coin) => {
          return (
            <Link
              key={coin.id}
              href="/details/[id]"
              as={`/details/${id}`}
              passHref
            >
              <TableRow coin={coin} url={props.url} />
            </Link>
          );
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
