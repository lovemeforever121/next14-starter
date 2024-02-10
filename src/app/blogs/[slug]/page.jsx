import Image from "next/image";
import styles from "./singlePost.module.css";
import UserDetail from "@/components/userDetail/UserDetail";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const data = async (post) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${post}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Error connecting api");
  }
};

// dynamic content metadata
export const generateMetadata = async ({ params }) => {
  // const singleData = await getPost(params.slug);
  const { slug } = params;
  const singleData = await data(slug);
  return {
    title: singleData.title,
    description: singleData.desc,
  };
};
const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const singleData = await data(slug);
  // const singleData = await getPost(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={singleData.img}
          alt="singe post image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{singleData.title}</h1>
        <div className={styles.details}>
          <Image
            src="/noavatar.png"
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <UserDetail id={singleData.userId} />
          </Suspense>
        </div>
        <div className={styles.content}>{singleData.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
