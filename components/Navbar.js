import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Live Prices</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/details/[id]" as="/details/bitcoin">
            <a>Details</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
