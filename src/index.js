import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
import App from "./App";
// import Greetings from '../src/Translation/GreetingComponent';
import 'bootstrap/dist/css/bootstrap.css';
import '@shopify/polaris/styles.css';
import { LocalizeProvider } from "react-localize-redux";
import { AppProvider } from '@shopify/polaris';


render(
  <Provider store={store}>
   <LocalizeProvider>
    <AppProvider>
      <App />
    </AppProvider>
    </LocalizeProvider>
  </Provider>,
  document.getElementById('root')
);
