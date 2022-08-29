import "../styles/globals.css";
import { wrapper, store } from "../src/redux/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);