import * as React from "react";
import { LogBox } from "react-native";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";

const { persistor, store } = ConfigureStore();
LogBox.ignoreAllLogs();
// LogBox.ignoreLogs(["Warning: ..."]);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
