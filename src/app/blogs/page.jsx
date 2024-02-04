import PostCard from "@/components/postCard/postCard";
import styles from "./blogs.module.css";
import { getPosts } from "@/lib/data";
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
};
const Blogs = async () => {
    
    const posts = await getPosts();
    return (
        <div className={styles.container}>
                {posts.map((post) => (
            <div className={styles.post}>
                    <PostCard key={post.id} post={post} />
            </div>
      ))}
        </div>
    );
};

export default Blogs;
