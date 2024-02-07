import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "This is the about page",
};
const AboutPage = () => {
    let infos = [
        {
            heading: "10 K+",
            desc: "Years of Experience",
        },
        {
            heading: "234 K+",
            desc: "People reached",
        },
        {
            heading: "5 K+",
            desc: "Services and plugins",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>About Section</h2>
                <h1>
                    We create digital ideas that are bigger, bolder, braver and better
                </h1>
                <p>
                    We create digital ideas that are bigger, bolder, braver and better. We
                    believe in good ideas flexibility and precission We're world best
                    consulting and finance solution provider. Wide range of web and
                    software development services
                </p>
                <div className={styles.infos}>
                    {infos.map((info, index) => (
                        <div className={styles.info} key={index}>
                            <h2>{info.heading}</h2>
                            <p>{info.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/about.png" alt="about image" fill className={styles.img} />
            </div>
        </div>
    );
};

export default AboutPage;
