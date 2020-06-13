import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import AuthorizedNavigator from "./navigation/authorizedNavigator.js";
import UnauthorizedNavigator from "./navigation/unauthorizedNavigator.js";
import AppLoading from "./screens/AppLoading";

export default function App() {
  //state
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [isAuthenticationReady, setIsAuthenticationReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    //load assets
    setAssetsLoaded(true);
    //check if authentication is ready
    setIsAuthenticationReady(true);
    //check if user is authentcated
    setIsAuthenticated(true);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {assetsLoaded && isAuthenticationReady ? (
          <View style={{ flex: 1 }}>
            {isAuthenticated === true ? (
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
