import styles from "./blogs.module.css";
import Blog from "./blog/Blog";
const Blogs = () => {
  let blogs = [
    {
      img: "/noavatar.png",
      title: "title",
      desc: "desc",
      link: "path",
    },
  ];
  return (
    <div className={styles.container}>
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
