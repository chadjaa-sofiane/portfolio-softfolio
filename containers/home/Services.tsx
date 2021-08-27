import { Card, CardContent, CardIcon } from "@components/Card";
import useObserver from "@lib/hooks/useObserver";
import BackendIcon from "@public/svgs/backend.svg";
import MobileIcon from "@public/svgs/mobile-app.svg";
import WebProgramingIcon from "@public/svgs/web-programming.svg";
import styles from "@scss/index.module.scss";

function Services() {
  const [servicesRef, servicesComponentApears]: any = useObserver({
    isIntersecting: true,
    options: { threshold: 0.5 },
    disconnect: true,
  });
  return (
    <div
      ref={servicesRef}
      className={`${styles.services__wrapper} ${
        servicesComponentApears && styles.homeComponentsApears
      }`}
      id="services"
    >
      <h1 className={styles.title}>My Services</h1>
      <div className={styles.services__container}>
        <Card>
          <CardContent title="Front-End" subTitle="expert">
            <div className={styles.services__fieldIcon}>
              <WebProgramingIcon className={styles.services__icon} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent title="Back-End" subTitle="expert">
            <div className={styles.services__fieldIcon}>
              <BackendIcon className={styles.services__icon} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent title="Mobile-app" subTitle="expert">
            <div className={styles.services__fieldIcon}>
              <MobileIcon className={styles.services__icon} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Services;
