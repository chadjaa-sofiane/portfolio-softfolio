import Image from "next/image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styles from "@scss/index.module.scss";
import { Menu, MenuItem } from "@components/Menu";

interface cardProps {
  src?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}

interface cardActionsProps {
  avatar?: React.ReactElement;
  actions?: Action[];
}
interface Action {
  label: string;
  cb(): any;
}

export const Card: React.FC<cardProps> = ({
  children,
  src,
  className = "",
  onClick,
}) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      {src && (
        <div className={styles.card__pecture}>
          <Image src={src} layout="fill" />
        </div>
      )}
      {children}
    </div>
  );
};

export const CardHeader: React.FC<cardActionsProps> = ({ avatar, actions }) => {
  return (
    <div className={styles.card__header}>
      {avatar && <div className={styles.card_avatar}> {avatar} </div>}
      {actions?.length > 0 && (
        <Menu
          className={styles.card__header__actions}
          right
          label={<MoreVertIcon />}
        >
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

export const CardContent: React.FC = ({ children }) => {
  return (
    <div>
      <div className={styles.card__container}>{children}</div>
    </div>
  );
};

