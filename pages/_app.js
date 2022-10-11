import "../styles/globals.css";
// import ScrollinEffect from "../Components/scrollprogress/ScrollProgress";
import { Provider } from "react-redux";
import store from "../Store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
