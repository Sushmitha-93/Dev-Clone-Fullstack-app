import React, { useState } from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import useHttpClient from "../../hooks/useHttpClient";
import { useGoogleLogin } from "@react-oauth/google";

const GLogin = (props) => {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const { setError } = useHttpClient();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("tokenResponse", tokenResponse);

      props.onLogin(tokenResponse);
      setShowLoginButton(false);
    },
    onFailure: (error) => {
      setError("Login with Google failed. Please try again!", error);
      console.log(error);
    },
  });

  return (
    <div className="auth__google">
      <button className="btn btn__social" onClick={() => login()}>
        <i>
          <FcGoogle />
        </i>
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GLogin;
