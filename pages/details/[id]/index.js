import { useRouter } from "next/router";
import fetcher from "../../../util/fetcher";

export default function Details({ coin }) {
  console.log(coin);
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  return <p>Details: {id}</p>;
}

Details.getInitialProps = async ({ query }) => {
  console.log("id GIP", query);
  let coin = await fetcher(
    `https://api.coinstats.app/public/v1/coins/${query.id}?currency=USD`
  );

  return {
    coin,
  };
};
