"use client";
import Link from "next/link";
import styles from "./navLinks.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({ items }) => {
    const pathName = usePathname();
    return (
        <Link
            href={items.path}
            className={`${styles.container}
            ${pathName === items.path && styles.active}`}
        >
            {items.title}
        </Link>
    );
};

export default NavLinks;
