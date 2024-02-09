import { createPost, deletePost } from "@/lib/action";
import styles from "./serveractiontest.module.css";

const serverAction = () => {

  return (
    <div>
      <form action={createPost} className={styles.form}>
     <input type="text" name="title" placeholder="title" />
     <input type="text" name="desc" placeholder="desc" />
     <input type="text" name="slug" placeholder="slug" />
     <input type="text" name="img" placeholder="img" />
     <input type="text" name="userId" placeholder="userId" />
        <button>Click</button>
      </form>
      <form action={deletePost} className={styles.form}>
      <input type="text" name="id" placeholder="id" />
      <button>Delete</button>
      </form>
    </div>
  );
};

export default serverAction;
