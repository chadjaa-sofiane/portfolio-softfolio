import React, { FC, ReactElement } from "react";
import Image from "next/image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styles from "@scss/index.module.scss";
import { Menu, MenuItem } from "@components/Menu";

interface cardProps {
  src?: string;
  className?: string;
}
interface cardContentProps {
  title?: string;
  subTitle?: string;
}

interface cardActionsProps {
  avatar?: ReactElement;
  actions?: Action[];
}
interface Action {
  label: string;
  cb(): any;
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

export const CardHeader: FC<cardActionsProps> = ({ avatar, actions }) => {
  return (
    <div className={styles.card__header}>
      {avatar && <div className={styles.card_avatar}> {avatar} </div>}
      {actions?.length > 0 && (
        <Menu className={styles.card__header__actions} right label={<MoreVertIcon />}>
          {actions.map((m, index) => {
            return (
              <MenuItem key={index} action={m.cb}>
                {m.label}
              </MenuItem>
            );
          })}
        </Menu>
      )}
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
