import React from "react";

const Register = ({ handleLogin }) => {
  return (
    <div>
      <h3 className="text-lg">Register</h3>
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Register;
