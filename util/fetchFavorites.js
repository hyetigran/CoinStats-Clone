import fetcher from "./fetcher";
import useSWR from "swr";

export const fetchFavorites = (link) => {
  if (link !== "/favorites") return;
  const storedFavCoins = JSON.parse(localStorage.getItem("coins"));
  let coins = [];
  for (let prop in storedFavCoins) {
    const { data, error } = useSWR(
      `https://api.coinstats.app/public/v1/coins/${prop}?currency=USD`,
      fetcher
    );
    // console.log(data.coin);
    if (data !== undefined && data.coin) {
      coins.push(data.coin);
    }
  }
  //sort data by rank
  coins.sort((a, b) => a.rank - b.rank);
  return coins;
};
