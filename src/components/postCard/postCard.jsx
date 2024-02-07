import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    {post.img && (
                        <Image
                            src={post.img}
                            alt="blog-post-image"
                            fill
                            className={styles.img}
                        />
                    )}
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.desc}</p>
                <Link href={`/blogs/${post.slug}`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
