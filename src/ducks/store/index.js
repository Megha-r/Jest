import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'
import rootReducer from "../reducer/articleReducer";


const logger = createLogger();
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  
  applyMiddleware(logger)
);

export default store;
