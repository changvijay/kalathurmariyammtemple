import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri =  window.location.origin;

if (!domain || !clientId || !redirectUri) {
  console.error("Missing required environment variables for Auth0 configuration");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
  domain={process.env.REACT_APP_AUTH0_DOMAIN}
  clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
  audience={process.env.REACT_APP_AUTH0_AUDIENCE}  // Ensure this is correct
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  cacheLocation="localstorage" 
>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// Optional performance measurement
reportWebVitals();
