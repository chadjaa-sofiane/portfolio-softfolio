import React, { useState, useMemo, useEffect } from "react";
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
    options: { threshold: 0.25 },
    disconnect: true,
  });
  function filterToolsInfo(n) {
    const setField = (field: string): tools[] => {
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
    setTools([...initialState]);
    filterToolsInfo(active);
  }, []);
  function handleActiveTabs(e) {
    setActive(e.target.value);
    filterToolsInfo(e.target.value);
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
        <Tab value={3}>Data Base</Tab>
        <Tab value={4}>Mobile Developer</Tab>
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
import ElectronIcon from "@public/svgs/tools/electron.svg";
import SassIcon from "@public/svgs/tools/sass.svg";
import ReactSepringIcon from "@public/svgs/tools/react-spring.svg";
import JwtIcon from "@public/svgs/tools/jwt.svg";
import FastifyIcon from "@public/svgs/tools/fastify.svg";
import ApolloIcon from "@public/svgs/tools/apollo.svg";
import GulpIcon from "@public/svgs/tools/gulp.svg";
import PugIcon from "@public/svgs/tools/pug.svg";
import EjsIcon from "@public/svgs/tools/ejs.svg";
import MongodbIcon from "@public/svgs/tools/mongodb.svg";
import PostgresqlIcon from "@public/svgs/tools/postgresql.svg";
import RedisIcon from "@public/svgs/tools/redis.svg";

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
    name: "gatsby",
    field: "front-end",
    link: "",
    Icon: GatsbyIcon,
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
    name: "react-spring",
    field: "front-end",
    link: "",
    Icon: ReactSepringIcon,
  },
  {
    name: "webpack",
    field: "front-end",
    link: "",
    Icon: WebpackIcon,
  },
  {
    name: "sass",
    field: "front-end",
    link: "",
    Icon: SassIcon,
  },
  {
    name: "apollo",
    field: "front-end",
    link: "",
    Icon: ApolloIcon,
  },
  {
    name: "electron",
    field: "front-end",
    link: "",
    Icon: ElectronIcon,
  },
  {
    name: "mongodb",
    field: "data-base",
    link: "",
    Icon: MongodbIcon,
  },
  {
    name: "postgresql",
    field: "data-base",
    link: "",
    Icon: PostgresqlIcon,
  },
  {
    name: "redis",
    field: "data-base",
    link: "",
    Icon: RedisIcon,
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
    name: "jwt",
    field: "back-end",
    link: "",
    Icon: JwtIcon,
  },
  {
    name: "fastify",
    field: "back-end",
    link: "",
    Icon: FastifyIcon,
  },
  {
    name: "gulp",
    field: "back-end",
    link: "",
    Icon: GulpIcon,
  },
  {
    name: "pug",
    field: "back-end",
    link: "",
    Icon: PugIcon,
  },
  {
    name: "ejs",
    field: "back-end",
    link: "",
    Icon: EjsIcon,
  },
];

export default MyTools;
