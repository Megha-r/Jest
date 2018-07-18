import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import '@shopify/polaris/styles.css';
import { AppProvider } from '@shopify/polaris';


render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>,
  document.getElementById('root')
);
