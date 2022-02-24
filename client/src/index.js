import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { fetchItem } from './redux/itemSlice';


store.dispatch(fetchItem())



ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>

      <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
