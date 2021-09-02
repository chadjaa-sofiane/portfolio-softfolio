import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@scss/index.module.scss";
import { useRouter } from "next/dist/client/router";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Soft<span>Folio</span>
      </div>
      <nav>
        <ul>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/exposition">exposition</NavLink>
          <NavLink href="/blogs">blogs</NavLink>
          <NavLink href="/contact">contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}

const NavLink = ({ href = "/", children }) => {
  const { pathname } = useRouter();
  return (
    <li className={pathname === href ? styles.active : ""}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default Header;
