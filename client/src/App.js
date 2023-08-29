import React from "react";
import "./styles/main.css";
import AppProviders from "./components/AppProviders/AppProviders";
import MainRouter from "./MainRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AppProviders>
        <MainRouter />
      </AppProviders>
    </GoogleOAuthProvider>
  );
};

export default App;
