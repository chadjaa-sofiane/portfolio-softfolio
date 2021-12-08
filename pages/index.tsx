import Head from "next/head";
import Introduction from "@containers/home/introduction";
import Services from "@containers/home/services";
import MyTools from "@containers/home/myTools";
import MyTeam from "@containers/home/myTeam";

const Home = () => {

  return (
    <>
      <Head>
        <title>softfolio</title>
        <meta name="description" content="softfolio home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduction />
      <Services />
      <MyTools />
      <MyTeam />
    </>
  );
};

export default Home;
