import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { bindActionCreators } from 'redux';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import {appConfigureStore} from './store'
import {setupAxiosInterceptors} from "./helpers/api_helper";
import { clearAuthentication} from './store/auth';

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = appConfigureStore({})

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors((msg) => actions.clearAuthentication(msg));

root.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();