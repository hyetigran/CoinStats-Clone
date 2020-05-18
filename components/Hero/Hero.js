import HeroBigStat from "./HeroBigStat";
import styles from "./Hero.module.css";

const Hero = (props) => {
  return (
    <div>
      <h1 className={styles.heading}>Crypto Prices and Portfolio</h1>
      <div className={styles.heroContainer}>
        <HeroBigStat title={"Market Cap"} number={"12345678"} percent={"25%"} />
        <HeroBigStat title="Volume 24H" number={12345678} percent={"25%"} />
        <HeroBigStat title="BTC Dominance" number={12345678} percent={"25%"} />
      </div>
    </div>
  );
};

export default Hero;
