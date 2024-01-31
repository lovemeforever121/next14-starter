import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
export default function Blog({ blog }) {
  return (
    <div className={styles.container}>
      <Image src={blog.img} alt="blog" height={50} width={50} />
      <h2>{blog.title}</h2>
      <p>{blog.desc}</p>
      <Link href="">Read More</Link>
    </div>
  );
}
