import type { FC } from "react";
import { Provider } from "react-redux";
import Header from 'layout/header';
import Footer from 'layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "components/App/App.css";
import Agents from "../Agents";
import store from "store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header title="Agents App" />
        <Agents />
        <Footer title="Agents App Footer" />
      </div>
    </Provider>
  );
};

export default App;
