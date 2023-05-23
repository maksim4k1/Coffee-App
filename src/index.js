import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop/>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);