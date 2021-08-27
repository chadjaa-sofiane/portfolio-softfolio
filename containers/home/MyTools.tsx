import React, { useState, useMemo, lazy } from "react";
import { Card, CardContent } from "@components/Card";
import { Tabs, Tab } from "@components/Tabs";
import useObserver from "@lib/hooks/useObserver";
import styles from "@scss/index.module.scss";

interface tools {
  name: string;
  field: string;
  link: string;
  Icon: any;
}

function MyTools() {
  const initialState: tools[] = useMemo(() => toolsInfo, []);
  const [active, setActive] = useState(0);
  const [tools, setTools] = useState([]);
  const [toolsRef, servicesComponentApears]: any = useObserver({
    isIntersecting: true,
    options: { threshold: 0.5 },
    disconnect: true,
  });
  function filterToolsInfo(n) {
    console.log(n);
    function setField(field: string): tools[] {
      return initialState.filter((t) => t.field === field);
    }
    switch (n) {
      case 0:
        return setTools([...initialState]);
      case 1:
        return setTools([...setField("front-end")]);
      case 2:
        return setTools([...setField("back-end")]);
      case 3:
        return setTools([...setField("mobile")]);
      default:
        return;
    }
  }
  useEffect(() => {
    setTools([...initialState]);
    filterToolsInfo(active);
  }, []);
  function handleActiveTabs(e) {
    setActive(e.target.value);
    filterToolsInfo(active);
    console.log(tools);
  }
  return (
    <div
      ref={toolsRef}
      className={`${styles.tools__wrapper} ${
        servicesComponentApears && styles.homeComponentsApears
      }`}
    >
      <h1 className={styles.title}> MY TOOLS </h1>
      <Tabs onChange={handleActiveTabs} value={active}>
        <Tab value={0}>All</Tab>
        <Tab value={1}>Front End</Tab>
        <Tab value={2}>Back End</Tab>
        <Tab value={3}>Mobile Developer</Tab>
      </Tabs>
      <div className={styles.tools__container}>
        {tools.map(({ name, link, Icon }, index) => (
          <Card key={index} className={styles.tools__card}>
            <CardContent>
              <a
                href={link}
                target="_blank"
                className={styles.tools__IconField}
              >
                <Icon />
              </a>
              <h6 className={styles.tools__title}>{name}</h6>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// import the Icons
import ReactIcon from "@public/svgs/tools/react.svg";
import VueIcon from "@public/svgs/tools/vue.svg";
import NextIcon from "@public/svgs/tools/next-js.svg";
import ReduxIcon from "@public/svgs/tools/redux.svg";
import BootstrapIcon from "@public/svgs/tools/bootstrap.svg";
import GatsbyIcon from "@public/svgs/tools/gatsby.svg";
import MaterialUiIcon from "@public/svgs/tools/material-ui.svg";
import SemanticUiIcon from "@public/svgs/tools/semantic-ui.svg";
import WebpackIcon from "@public/svgs/tools/webpack.svg";
import ExpressIcon from "@public/svgs/tools/express.svg";
import GraphqlIcon from "@public/svgs/tools/graphql.svg";
import JwtIcon from "@public/svgs/tools/jwt.svg";
import { useEffect } from "react";

const toolsInfo = [
  {
    name: "React",
    field: "front-end",
    link: "https://reactjs.org/",
    Icon: ReactIcon,
  },
  {
    name: "Vue",
    field: "front-end",
    link: "",
    Icon: VueIcon,
  },
  {
    name: "Next",
    field: "front-end",
    link: "",
    Icon: NextIcon,
  },
  {
    name: "Redux",
    field: "front-end",
    link: "",
    Icon: ReduxIcon,
  },
  {
    name: "Bootstrap",
    field: "front-end",
    link: "",
    Icon: BootstrapIcon,
  },
  {
    name: "gatsby",
    field: "front-end",
    link: "",
    Icon: GatsbyIcon,
  },
  {
    name: "material-ui",
    field: "front-end",
    link: "",
    Icon: MaterialUiIcon,
  },
  {
    name: "semantic-ui",
    field: "front-end",
    link: "",
    Icon: SemanticUiIcon,
  },
  {
    name: "webpack",
    field: "front-end",
    link: "",
    Icon: WebpackIcon,
  },
  {
    name: "express",
    field: "back-end",
    link: "",
    Icon: ExpressIcon,
  },
  {
    name: "graphql",
    field: "back-end",
    link: "",
    Icon: GraphqlIcon,
  },
  {
    name: "json-web-token",
    field: "back-end",
    link: "",
    Icon: JwtIcon,
  },
];

export default MyTools;
