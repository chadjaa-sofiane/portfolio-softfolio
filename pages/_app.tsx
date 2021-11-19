import { AppProps } from "next/app";
import { Provider } from "react-redux";
import styles from "@scss/index.module.scss";
import store from "@store/index";
import Background from "@components/background";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "@scss/index.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Header />
      <Background />
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
};

export default MyApp;
