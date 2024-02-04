"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLinks from "./navLinks/NavLinks";
import Image from "next/image";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];
  //Temporary
  const [open, setOpen] = useState(false);
  let session = true;
  let isadmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks key={link.title} items={link} />
        ))}
        {session ? (
          <>
            {isadmin && (
              <NavLinks
                items={{ title: "Admin", path: "/admin" }}
                key="Admin"
              />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks items={{ title: "Login", path: "/login" }} key="Login" />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={40}
        height={40}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLinks key={link.title} items={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
