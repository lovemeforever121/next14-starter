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
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" name="name" />
                    <input type="text" placeholder="Email Address" name="email" />
                    <input type="text" placeholder="Phone No. Optional" name="phone" />
                    <textarea placeholder="Message" cols="30" rows="10" name="message"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
