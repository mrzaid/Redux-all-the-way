import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import Store from './store';
// import Store from './basic';



// console.log(Store.getState());

ReactDOM.render(
  <Provider store = {Store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
