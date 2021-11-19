import Image from "next/image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styles from "@scss/index.module.scss";
import { Menu, MenuItem } from "@components/Menu";

interface cardProps {
  src?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
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


