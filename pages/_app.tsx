import type { NextPage } from "next";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import styles from "@scss/index.module.scss";
import store from "@store/index";
import Background from "@components/background";
import Header from "@components/Header";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";
import ContextProvider from "@containers/_app/ContextProvider"
import "@scss/index.scss";

type NextPageWithLayout = NextPage & {
  pageLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const appLayout = (page) => {
  return (
    <>
      <Header />
      <Background />
      <BackToTop />
      <div className={styles.container}>{page}</div>
      <Footer />
    </>
  );
};

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  const getLayout = Component.pageLayout ?? appLayout;
  return (
    <Provider store={store}>
      <ContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </ContextProvider>
    </Provider>
  );
};

export default MyApp;
