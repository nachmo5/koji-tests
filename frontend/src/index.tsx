import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import AuthenticationProvider from './providers/Auth';
import DataProvider from './providers/Data';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
