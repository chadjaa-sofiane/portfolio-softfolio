import { useState, createContext } from "react";
import useObserver from "@lib/hooks/useObserver";
import styles from "@scss/index.module.scss";
import ServicesCards from "./ServicesCards";
import { FrontEnd, BackEnd, Mobile } from "@components/services";
import { SwitchTransition, CSSTransition } from "react-transition-group";

interface IServicesContext {
  service?: string;
  setService?: (string) => void;
}

export const ServicesContext = createContext<IServicesContext>({});

const Services = () => {
  const [service, setService] = useState("");
  const [servicesRef, servicesComponentApears]: any = useObserver({
    isIntersecting: true,
    options: { threshold: 0.25 },
    disconnect: true,
  });
  return (
    <ServicesContext.Provider
      value={{ service, setService: (s) => setService(s) }}
    >
      <div
        ref={servicesRef}
        className={`${styles.services__wrapper} ${
          servicesComponentApears ? styles.homeComponentsApears : ""
        }`}
        id="services"
      >
        <h1 className={styles.title}>My Services</h1>
        <SwitchTransition>
          <CSSTransition
            timeout={200}
            key={service}
            classNames={{
              enter: styles["services__transition--enter"],
              enterActive: styles["services__transition--enter-active"],
              exit: styles["services__transition--exit"],
              exitActive: styles["services__transition--exit-active"],
            }}
          >
            <>
              {!service && <ServicesCards />}
              {service === "front-end" && <FrontEnd />}
              {service === "back-end" && <BackEnd />}
              {service === "mobile" && <Mobile />}
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </ServicesContext.Provider>
  );
};

export default Services;
