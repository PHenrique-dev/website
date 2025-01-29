import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomeContextProvider from './Context/HomeContext';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="dev-phiga.us.auth0.com"
      clientId="fFwd1zqo6OZqgB60WHY3e6p29TSICGv6"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
  <HomeContextProvider>
    <App />
  </HomeContextProvider>
  </Auth0Provider>
);

