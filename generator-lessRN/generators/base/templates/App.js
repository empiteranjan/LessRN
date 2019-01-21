import React, { Component } from "react";
import { Provider } from "react-redux";
import AppNavigation from "./src/navigation";
import { YellowBox } from "react-native";
import Logger from "redux-logger";
import { PersistGate } from "redux-persist/integration/react";
import ConfigureStore from "./src/store";
import { Text } from "react-native";

const { store, persistor } = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader"
    ]);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
