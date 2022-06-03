import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchContextProvider } from './Context/SearchContext';
import { AuthContextProvider } from './Context/authContext';
import { RegisterContextProvider } from './Context/registerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterContextProvider>
      <AuthContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
      </AuthContextProvider>
    </RegisterContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
