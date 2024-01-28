import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Section</h2>
        <h1>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" fill />
      </div>
    </div>
  );
};

export default AboutPage;
