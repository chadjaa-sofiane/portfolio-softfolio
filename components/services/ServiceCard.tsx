import { ReactChild, useContext } from "react";
import { Card } from "@components/Card";
import styles from "@scss/index.module.scss";
import { ServicesContext } from "@containers/home/services";

interface IServiceCardProps {
  title: string;
  name: string;
  Icon: ReactChild;
}

const ServiceCard: React.FC<IServiceCardProps> = (props) => {
  const context = useContext(ServicesContext);
  return (
    <Card
      className={styles["services__card"]}
      onClick={() => context.setService(props.name)}
    >
      <div className={styles["services__card__iconField"]}>{props.Icon}</div>
      <h2 className={styles["services__card__title"]}>{props.title}</h2>
    </Card>
  );
};

export default ServiceCard;
