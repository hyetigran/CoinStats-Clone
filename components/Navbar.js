import Link from "next/link";
import styles from "./Layout.module.css";

const Navbar = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img src="/static/logo.png" />
      </div>
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
      </ul>
    </header>
  );
};

export default Navbar;
