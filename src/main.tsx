import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App/App.tsx'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);