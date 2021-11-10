import BackendIcon from "@public/svgs/backend.svg";
import MobileIcon from "@public/svgs/mobile-app.svg";
import WebProgramingIcon from "@public/svgs/web-programming.svg";
import ServiceCard from "@components/services/ServiceCard";
import styles from "@scss/index.module.scss";

const ServicesCards: React.FC = () => {
  return (
    <div className={styles.services__container}>
      <ServiceCard
        title="FRON-END"
        name="front-end"
        Icon={<WebProgramingIcon className={styles["services__icon"]} />}
      />
      <ServiceCard
        title="BACK-END"
        name="back-end"
        Icon={<BackendIcon className={styles["services__icon"]} />}
      />
      <ServiceCard
        title="MOBILE"
        name="mobile"
        Icon={<MobileIcon className={styles["services__icon"]} />}
      />
    </div>
  );
};

export default ServicesCards;
