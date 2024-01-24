import styles from "./links.module.css";
import NavLinks from "./navLinks/NavLinks";

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
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Admin",
      path: "/admin",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
          <NavLinks key={link.title} items={link} />
      ))}
    </div>
  );
};

export default Links;
