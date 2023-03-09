import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import {App} from './App';

// const Deez = () => {
//   return (
//     <h1>Deez nuts in React bitch!!</h1>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
