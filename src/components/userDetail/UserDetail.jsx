import { getUser } from "@/lib/data";
import styles from "./userDetail.module.css";
const data = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();
    return data;
}
const UserDetail = async (props) => {
    console.log("id > ",props.id);
    const userData = await getUser(props.id);
  return (
    <>
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{userData?.username}</span>
      </div>
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Published</span>
        <span className={styles.detailValue}>01.01.2000</span>
      </div>
    </>
  );
};

export default UserDetail;
