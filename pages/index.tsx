import Head from "next/head";

import styles from "@scss/index.module.scss";
import Introduction from "@containers/home/introduction";
import Services from "@containers/home/services";
import MyTools from "@containers/home/myTools";
import MyTeam from "@containers/home/myTeam";

export default function Home() {
  return (
    <>
      <Head>
        <title>softfolio</title>
        <meta name="description" content="softfolio home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.body}>
        <div className={styles.body__container}>
          <Introduction />
          <Services />
          <MyTools />
          <MyTeam />
        </div>
      </main>
    </>
  );
}
