import { useContext } from "react";
import { ServicesContext } from "@containers/home/services";
import BackArrow from "@material-ui/icons//ArrowBack";
import { Card } from "@components/Card";
import styles from "@scss/index.module.scss";

interface IProps {
  title: string;
}

const ServicesInfoLayout: React.FC<IProps> = (props) => {
  const context = useContext(ServicesContext);
  return (
    <Card>
      <div className={styles["serviceInfo__head"]}>
        <h2 className={styles["serviceInfo__title"]}>{props.title}</h2>
        <button
          className={`${styles["serviceInfo__backBtn"]}`}
          onClick={() => context.setService("")}
        >
          <BackArrow />
        </button>
      </div>
      {props.children}
    </Card>
  );
};

export default ServicesInfoLayout;
