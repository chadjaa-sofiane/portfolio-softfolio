import { useState } from "react";
import useObserver from "@lib/hooks/useObserver";
import styles from "@scss/index.module.scss";
import ServicesCards from "./ServicesCards";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// chnange .5 to .25
function Services() {
  const [service, setService] = useState("");
  const [servicesRef, servicesComponentApears]: any = useObserver({
    isIntersecting: true,
    options: { threshold: 0.25 },
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
      <TransitionGroup>
        <CSSTransition
          timeout={500}
          key={service}
          classNames={{
            enter: styles["services__transition--enter"],
            enterActive: styles["services__transition--enter-active"],
            exit: styles["services__transition--exit"],
            exitActive: styles["services__transition--exit-active"],
          }}
        >
          <>
            {!service && (
              <ServicesCards setService={(service) => setService(service)} />
            )}
            {service === "front-end" && (
              <ServiceCard setService={setService}> frond end </ServiceCard>
            )}
            {service === "back-end" && (
              <ServiceCard setService={setService}> back end </ServiceCard>
            )}
            {service === "mobile" && (
              <ServiceCard setService={setService}> mobile </ServiceCard>
            )}
          </>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

const ServiceCard = (props) => {
  return (
    <div>
      <button onClick={() => props.setService("")} className={styles["button"]}>
        BACK
      </button>
      {props.children}
    </div>
  );
};

export default Services;
