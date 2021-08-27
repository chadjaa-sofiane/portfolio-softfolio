import styles from "@scss/index.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Soft<span>Folio</span>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Blogs</li>
          <li>contact</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
