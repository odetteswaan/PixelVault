import React from "react";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type IReduxProviderProps = {
  children: React.ReactNode;
};

function ReduxProvider(props: IReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
