import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
  window.addEventListener('load', (): void => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
