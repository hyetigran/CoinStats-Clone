import { useRouter } from "next/router";
import fetcher from "../util/fetcher";

export default function Details({ coin }) {
  console.log(coin);
  const router = useRouter();
  const { pid } = router.query;

  return <p>Details: {pid}</p>;
}

// Details.getInitialProps = async ({ res, query }) => {
//   console.log(query);
//   let coin = await fetcher(
//     `https://api.coinstats.app/public/v1/coins/${query.pid}?currency=USD`
//   );

//   return {
//     coin,
//   };
// };
