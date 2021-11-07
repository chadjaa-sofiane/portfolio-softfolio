import { Card, CardContent } from "@components/Card";
import BackendIcon from "@public/svgs/backend.svg";
import MobileIcon from "@public/svgs/mobile-app.svg";
import WebProgramingIcon from "@public/svgs/web-programming.svg";
import styles from "@scss/index.module.scss";

interface IProps {
  setService: (string) => void;
}

const ServicesCards: React.FC<IProps> = (props) => {
  return (
    <div className={styles.services__container}>
      <Card
        onClick={(e) => {props.setService("front-end") , e.currentTarget.classList.add("clicked")}}
        className={styles["services__card"]}
      >
        <CardContent>
          <div className={styles["services__card__iconField"]}>
            <WebProgramingIcon className={styles["services__icon"]} />
          </div>
          <h2 className={styles["services__card__title"]}> FRON-END </h2>
        </CardContent>
      </Card>
      <Card
        onClick={() => props.setService("back-end")}
        className={styles["services__card"]}
      >
        <CardContent>
          <div className={styles["services__card__iconField"]}>
            <BackendIcon className={styles["services__icon"]} />
          </div>
          <h2 className={styles["services__card__title"]}> BACK-END </h2>
        </CardContent>
      </Card>
      <Card
        onClick={() => props.setService("mobile")}
        className={styles["services__card"]}
      >
        <CardContent>
          <div className={styles["services__card__iconField"]}>
            <MobileIcon className={styles["services__icon"]} />
          </div>
          <h2 className={styles["services__card__title"]}> MOBILE </h2>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesCards;
