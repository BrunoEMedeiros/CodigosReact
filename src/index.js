import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App'

//Esta é  pagina basica de JSX do React, apartir dela criamos a renderização no arquivo index.html que esta dentro da pasta public
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
