import { useContext } from "react";
import { ServicesContext } from "@containers/home/services";
import styles from "@scss/index.module.scss";

interface IProps {
  title: string;
}

const ServicesInfoLayout: React.FC<IProps> = (props) => {
  const context = useContext(ServicesContext);
  return (
    <div className={styles["servicesInfo__container"]}>
      <div className={styles["servicesInfo__head"]}>
        <h2 className={styles["servicesInfo__title"]}> {props.title} </h2>
        <button
          className={`${styles["servicesInfo__backBtn"]}`}
          onClick={() => context.setService("")}
        >
          back
        </button>
      </div>
      {props.children}
    </div>
  );
};

export default ServicesInfoLayout;
