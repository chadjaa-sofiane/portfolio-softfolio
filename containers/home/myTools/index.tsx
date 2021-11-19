import React, { useState, useEffect } from "react";
import { Card } from "@components/Card";
import Tabs, { ActiveValue, Tab } from "@components/Tabs";
import useObserver from "@lib/hooks/useObserver";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import toolsInfo from "public/json/tools.json";
import styles from "@scss/index.module.scss";

interface ITools {
  name: string;
  field: string;
  link: string;
  Icon: any;
}

const initialState: ITools[] = toolsInfo;

const MyTools = () => {
  console.log(initialState);

  const [active, setActive] = useState<ActiveValue>(0);

  const [tools, setTools] = useState(initialState);

  const [toolsRef, servicesComponentApears]: any = useObserver({
    isIntersecting: true,
    options: { threshold: 0.25 },
    disconnect: true,
  });

  function filterToolsInfo(n) {
    const setField = (field: string): ITools[] => {
      return initialState.filter((t) => t.field === field);
    };
    switch (n) {
      case "0":
        setTools([...initialState]);
        break;
      case "1":
        setTools([...setField("front-end")]);
        break;
      case "2":
        setTools([...setField("back-end")]);
        break;
      case "3":
        setTools([...setField("data-base")]);
        break;
      case "4":
        setTools([...setField("mobile")]);
        break;
      default:
        return;
    }
  }
  useEffect(() => {
    filterToolsInfo(active);
  }, []);

  function handleActiveTabs(value) {
    setActive(value);
    filterToolsInfo(value.toString());
  }
  return (
    <div
      ref={toolsRef}
      className={`${styles["tools__wrapper"]} ${
        servicesComponentApears && styles["homeComponentsApears"]
      }`}
    >
      <h1 className={styles["title"]}> MY TOOLS </h1>
      <Tabs onChange={handleActiveTabs} name="tools" value={active}>
        <Tab value={0} active={true}>
          All
        </Tab>
        <Tab value={1}>Front End</Tab>
        <Tab value={2}>Back End</Tab>
        <Tab value={3}>Data Base</Tab>
        <Tab value={4}>Mobile Developer</Tab>
      </Tabs>
      <TransitionGroup className={styles["tools__container"]}>
        {tools?.map(({ name, link, Icon }, index) => (
          <CSSTransition
            key={index}
            timeout={200}
            classNames={{
              enter: styles["tools__item__transition-enter"],
              enterActive: styles["tools__item__transition-enter-active"],
              exit: styles["tools__item__transition-exit"],
              exitActive: styles["tools__item__transition-exit-active"],
            }}
          >
            <Card className={styles["tools__card"]}>
              <a
                href={link}
                target="_blank"
                className={styles["tools__IconField"]}
              >
                <img src={Icon} />
              </a>
              <h6 className={styles["tools__title"]}>{name}</h6>
            </Card>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default MyTools;
