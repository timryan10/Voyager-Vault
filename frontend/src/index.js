import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import CurrentUserProvider from "./contexts/CurrentUser";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserProvider> {/* Wrap the entire application with CurrentUserProvider */}
        <App />
      </CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);