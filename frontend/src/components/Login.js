import React, { useEffect, useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { json, useNavigate } from "react-router-dom";

import { UserState } from "../context/UserProvider";
const Login = ({ handleLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loding, setLoding] = useState(false);

  const navigate = useNavigate();

  const { token, setToken  } = UserState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("please fill all fealds");
      return;
    }
    setLoding(true);
    const user = { email, password };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        user: user,
        withCredentials: true,
      })
      .then((response) => {
        if (response.status !== 200) {
          console.log(response.data.message);
          toast(response.data.message);
        } else {
          console.log(response.data);
          if (response.data.token) {
            let token = response.data.token;
            setToken(token);
            token = JSON.stringify(token);
            localStorage.setItem("signedJWT", token);
            toast("Logged in");
            navigate("/home");
          }
        }
      });
  };
  const handleInput = (e, changeState) => {
    changeState(e.target.value);
  };

  useEffect(() => {
    let userInfo = localStorage.getItem("signedJWT");
    userInfo = JSON.parse(userInfo);
    setToken(userInfo);

    if (!token) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [token]);

  return (
    <div className=" h-[70%]  w-[80%] md:w-[70%] rounded-xl flex flex-col  gap-2">
      <h3 className="text-3xl">Hey, hello!</h3>
      <p className="text-gray-500 text-sm">
        Enter the information you entered while you registering.
      </p>
      <form
        className="flex flex-col gap-2 mt-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => handleInput(e, setEmail)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          
          onChange={(e) => handleInput(e, setPassword)}
        ></input>
        <button className="login-btn mt-5">Login</button>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-[45%] h-[0.4px]  bg-slate-500/50 "></div>
          <p>OR</p>
          <div className="w-[45%] h-[0.4px]  bg-slate-500/50 "></div>
        </div>

        <p className="text-gray-500 text-sm m-auto mt-5">
          Not registered?{" "}
          <span>
            {" "}
            <button
              onClick={handleLogin}
              className="text-md underline text-blue-500"
            >
              Create an account
            </button>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
