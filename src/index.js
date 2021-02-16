import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { config } from './config'

console.log(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
