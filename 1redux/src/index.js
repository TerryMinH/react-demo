/*
 * @Author: TerryMin
 * @Date: 2019-06-09 07:04:17
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-08-16 14:48:20
 * @Description: file not
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
// import App from './App';
let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

