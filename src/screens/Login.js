import React, { useState } from "react";
import "./Login.css";
import SignUp from "./SignUp";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login_background">
        <img
          className="login_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="login_button">
          Sign In
        </button>
        <div className="login_gradient"></div>
      </div>
      <div className="login_body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere, cancel any time.</h2>
            <h3>
              Ready to watch? Enter you email to create or restart your
              membership
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
