import { useRef } from "react";
import { useRouter } from "next/dist/client/router";
import useObserver from "@lib/hooks/useObserver";
import MenuIcon from "@material-ui/icons//Menu";
import CloseIcon from "@material-ui/icons//Close";
import styles from "@scss/index.module.scss";

const Header = () => {
  const [headerObservationRef, hasObserved] = useObserver<HTMLDivElement>();  
  const menuBtnRef = useRef<HTMLInputElement>(null);
  const closeMenu = () => {
    menuBtnRef.current.checked = false;
  };
  return (
    <>
      <header className={`${styles["header"]} ${hasObserved ? styles["header--second"] : ""}`}>
        <div className={styles["logo"]}>
          Soft<span>Folio</span>
        </div>
        <input
          ref={menuBtnRef}
          type="checkbox"
          id="menu_bar"
          className={styles["menu_bar"]}
          hidden
        />
        <nav className={styles["header__nav"]}>
          <ul>
            <li
              className={`${styles["menu_bar__btn"]} ${styles["menu_bar__btn--close"]}`}
            >
              <CloseIcon fontSize="large" onClick={closeMenu} />
            </li>
            <NavLink closeMenu={closeMenu} href="/">
              Home
            </NavLink>
            { /*TODO: finish this page before deploy it to the producttion */  }
            {/* <NavLink closeMenu={closeMenu} href="/exposition">
              exposition
            </NavLink> */}
            <NavLink closeMenu={closeMenu} href="/blogs">
              blogs
            </NavLink>
            <NavLink closeMenu={closeMenu} href="/contact">
              contact
            </NavLink>
          </ul>
        </nav>
        <label
          htmlFor="menu_bar"
          className={`${styles["menu_bar__btn"]} ${styles["menu_bar__btn--open"]}`}
        >
          <MenuIcon fontSize="large" />
        </label>
      </header>
      <div
        ref={headerObservationRef}
        className={styles["header__observation__helper"]}
      />
    </>
  );
};

const NavLink = ({ href = "/", children, closeMenu }) => {
  const { pathname, push } = useRouter();
  const navigatePush = () => {
    push(href);
    closeMenu();
  };
  return (
    <li
      className={pathname === href ? styles["active"] : ""}
      onClick={navigatePush}
    >
      {children}
    </li>
  );
};

export default Header;
