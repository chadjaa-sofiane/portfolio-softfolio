import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@store/index";
import Background from "@components/background";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "@scss/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Background />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
