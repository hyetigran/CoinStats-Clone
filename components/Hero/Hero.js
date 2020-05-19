import HeroBigStat from "./HeroBigStat";
import styles from "./Hero.module.css";

const Hero = (props) => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heading}>Crypto Prices and Portfolio</h1>
      <ul className={styles.heroContainer}>
        <HeroBigStat
          title="Market Cap"
          number={"$257,011,990,108"}
          percent={"-0.59%"}
        />
        <HeroBigStat
          title="Volume 24H"
          number={"$75,295,590,955"}
          percent={"6.15%"}
        />
        <HeroBigStat
          title="BTC Dominance"
          number={"67.43%"}
          percent={"-0.75%"}
        />
      </ul>
    </section>
  );
};

export default Hero;
