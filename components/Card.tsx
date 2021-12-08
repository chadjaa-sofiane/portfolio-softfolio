import styles from "@scss/index.module.scss";
import React, { createContext, useContext, useEffect, useState } from "react";

interface cardProps {
  className?: string;
  onClick?: React.MouseEventHandler;
}

interface ICardContext {
  backContent?: React.ReactNode;
  setbackContent?: (element: React.ReactNode) => void;
}

const CardContext = createContext<ICardContext>({});

export const Card: React.FC<cardProps> = ({ children, className, onClick }) => {
  const [backContent, setbackContent] = useState(null);
  return (
    <CardContext.Provider value={{ backContent, setbackContent }}>
      <div
        className={`${styles["card"]} ${
          backContent ? styles["card__flip"] : ""
        }`}
        onClick={onClick}
        tabIndex={1}
      >
        {backContent && (
          <div className={styles["card__back"]}>{backContent}</div>
        )}
        <div className={`${styles["card__front"]} ${className || ""}`}>
          {children}
        </div>
      </div>
    </CardContext.Provider>
  );
};

export const CardBack: React.FC = (props) => {
  const context = useContext(CardContext);
  useEffect(() => {
    if (context.setbackContent) {
      context.setbackContent(props.children);
    }
  }, []);

  return null;
};
