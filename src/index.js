import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

// Let's get the data from store
const store = configureStore();
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> { /* providing store data to the whole app */ }
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
