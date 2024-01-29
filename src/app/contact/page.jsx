import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="/contact.png"
                    alt="contact image"
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.formContainer}>
                <form>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone No. Optional" />
                    <textarea>Message</textarea>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
