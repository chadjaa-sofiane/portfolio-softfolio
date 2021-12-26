import { useContext } from "react";
import { ServicesContext } from "@containers/home/services";
import BackArrow from "@material-ui/icons//ArrowBack";
import styles from "@scss/index.module.scss";

interface IProps {
  title: string;
}

const ServicesInfoLayout: React.FC<IProps> = (props) => {
  const context = useContext(ServicesContext);
  return (
    <div className={styles["serviceInfo__wrapper"]}>
      <div className={styles["serviceInfo__head"]}>
        <button
          className={`${styles["serviceInfo__backBtn"]}`}
          onClick={() => context.setService("")}
        >
          <BackArrow />
        </button>
      </div>
      {props.children}
    </div>
  );
};

export default ServicesInfoLayout;
