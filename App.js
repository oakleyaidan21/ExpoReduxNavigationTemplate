import React, { Component } from "react";
import { View } from "react-native";
import { createStore } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import reducer from "./redux/reducer.js";
import AuthorizedNavigator from "./navigation/authorizedNavigator.js";
import UnauthorizedNavigator from "./navigation/unauthorizedNavigator.js";
import AppLoading from "./screens/AppLoading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
  }

  componentDidMount = () => {
    //check if assets are loaded
    this.setState({ assetsLoaded: true });
    //check if authentication is ready
    this.setState({ isAuthenticationReady: true });
    //check if user is authenticated
    this.setState({ isAuthenticated: true });
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {this.state.assetsLoaded && this.state.isAuthenticationReady ? (
            <View style={{ flex: 1 }}>
              {this.state.isAuthenticated === true ? (
                <AuthorizedNavigator />
              ) : (
                <UnauthorizedNavigator />
              )}
            </View>
          ) : (
            <AppLoading />
          )}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
