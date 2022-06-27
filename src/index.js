import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './router'
import './index.css';

import reportWebVitals from './reportWebVitals';

import { AppRouteStoreContainer } from './StoreAppRouter'
import { AppDataStoreContainer } from './StoreAppData'

ReactDOM.render(
  <BrowserRouter >
    <AppDataStoreContainer>

      <AppRouteStoreContainer>
        <Routes >
          {
            routes.map((data, index) => (
              <Route exact={true} path={data.path} element={data.component} key={index} />
            ))
          }
        </Routes>
      </AppRouteStoreContainer>
    </AppDataStoreContainer>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
