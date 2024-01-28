import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dolor
          excepturi et esse, nobis temporibus omnis dignissimos laboriosam,
          beatae nihil atque iste!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contacts</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands" fill className={styles.brandsImg}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="hero image" fill/>
      </div>
    </div>
  );
};

export default Home;
