import { FC } from "react";
import Image from "next/image";
import styles from "@scss/index.module.scss";

interface cardProps {
  src?: string;
  className?: string | object;
}
interface cardContentProps {
  title?: string;
  subTitle?: string;
}

export const Card: FC<cardProps> = ({ children, src, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {src && (
        <div className={styles.card__pecture}>
          <Image src={src} layout="fill" />
        </div>
      )}
      {children}
    </div>
  );
};

export const CardContent: FC<cardContentProps> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <div>
      <div className={styles.card__container}>
        {title && <h3 className={styles.card__title}> {title} </h3>}
        {subTitle && <h5 className={styles.card__subTitle}>{subTitle}</h5>}
        {children}
      </div>
    </div>
  );
};
export const CardIcon: FC = ({ children }) => {
  return <div className={styles.card__fieldIcon}>{children}</div>;
};
