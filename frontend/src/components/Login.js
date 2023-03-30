import React from "react";

const Login = ({ handleLogin }) => {
  return (
    <div>
      <h3 className="text-lg">Login</h3>
      <button
        onClick={handleLogin}
        className="login-btn"
      >
        Register
      </button>
    </div>
  );
};

export default Login;
