import styles from "@scss/index.module.scss";
import { FC, ReactElement, useEffect, useRef, useState } from "react";

let ID = 0;
interface menuProps {
  label: ReactElement | string;
  left?: boolean;
  right?: boolean;
  className?: string;
}
interface MenuItemProps {
  action?: (any) => any;
}

export const Menu: FC<menuProps> = ({
  label,
  left = false,
  right = false,
  children,
  className,
}) => {
  const [id, setId] = useState("");
  console.log(id);

  const checkRef = useRef(null);
  useEffect(() => {
    setId(_generateId());
  }, []);
  return (
    <div
      className={`${styles.menu__container} ${className}`}
      tabIndex={0}
      onBlur={() => (checkRef.current.checked = false)}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={checkRef}
        type="checkbox"
        id={id}
        className={styles.menu__checkBtn}
        hidden
      />
      <div
        className={`${styles.menu__dropDown} ${left && styles["menu--left"]} ${
          right && styles["menu--right"]
        }`}
        onClick={() => (checkRef.current.checked = false)}
      >
        {children}
      </div>
    </div>
  );
};

export const MenuItem: FC<MenuItemProps> = ({
  children,
  action = () => {},
}) => {
  return (
    <div className={styles.menu__item} onClick={action}>
      {children}
    </div>
  );
};

function _generateId() {
  ID += 1;
  return `menu_${ID++}`;
}
