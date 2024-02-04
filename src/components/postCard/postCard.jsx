import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18764173/pexels-photo-18764173/free-photo-of-artist-sitting-and-painting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog-post-image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blogs/${post.id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
