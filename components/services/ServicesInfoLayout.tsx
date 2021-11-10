import { useContext } from "react";
import { ServicesContext } from "@containers/home/services";
import styles from "@scss/index.module.scss";

interface IProps {
  title: string;
}

const ServicesInfoLayout: React.FC<IProps> = (props) => {
  const context = useContext(ServicesContext);
  return (
    <div className={styles["container"]}>
      <h2> {props.title} </h2>
      <button
        style={{ float: "left" }}
        className={styles["button"]}
        onClick={() => context.setService("")}
      >
        Back
      </button>
      {props.children}
    </div>
  );
};

export default ServicesInfoLayout;
