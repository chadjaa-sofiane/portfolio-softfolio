import { useState } from "react";
import styles from "@scss/index.module.scss";
import { useEffect } from "react";

let NAME = 0;

interface TabsProps {
  value?: number;
  onChange?: (any) => any;
}

export const Tabs = ({ children, value = 0, onChange = (any) => {} }) => {
  const [name, setName] = useState("");
  if (children) {
    if (Array.isArray(children)) {
      children = children.filter((e) => e.type.name === "Tab");
      children = children.map((e, index) => ({
        ...e,
        props: {
          ...e["props"],
          name,
          id: `${name}-id-${index}`,
          active: e.props.value === value,
        },
      }));
    } else {
      if (children.type.name !== "Tab") return children;
      children.props = { ...children["props"], name };
    }
  }
  useEffect(() => {
    setName(_uniqueName());
  }, []);
  return (
    <div className={styles.Tabs} onChange={onChange}>
      {children}
    </div>
  );
};

export function Tab({
  active = false,
  name = "tabs",
  value,
  children,
  id = "id",
}) {
  return (
    <>
      <input
        defaultChecked={active}
        type="radio"
        name={name}
        value={value}
        id={id}
        hidden
      />
      <label htmlFor={id} className={styles.Tabs__Tab}>
        {children}
      </label>
    </>
  );
}

function _uniqueName() {
  NAME = NAME + 1;
  return `tabs-${NAME}`;
}
