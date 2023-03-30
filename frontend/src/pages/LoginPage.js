import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <>
      <div className="bg-purple-100/50  h-[100vh] w-[100vw] flex items-center justify-center sm:p-5 md:p-10">
        {/* originnal down */}
      {/* <div className="bg-purple-100/50  h-screen w-screen flex items-center justify-center sm:p-5 md:p-10"> */}

        <div className=" p-5 sm:p-6 md:p-2 shadow-lg flex items-center  gap-0 justify-center h-[100%]  w-[100%]  max-w-5xl  rounded-lg ">" 
        {/* bg-slate-100" */}
          {/* images */}

          <div className="bg-red-200  relative  w-[0%] md:w-1/2  h-full  items-center justify-center ">
            <img
              className="object-cover h-[100%]  w-[100%]  "
              // src="https://cdn2.slidemodel.com/wp-content/uploads/7382-01-duotone-gradients-powerpoint-templates-16x9-2.jpg"
              // src="https://i.pinimg.com/originals/fb/f2/e8/fbf2e8b0b6fc2919c8257d1ba82f64b9.jpg"
              // src="https://i.pinimg.com/originals/c5/31/6a/c5316a227ef2e540154eb1e63ec71034.jpg"
              src="https://cdn.nohat.cc/thumb/f/720/33215a93ed924984a12d.jpg"
            />
            <div className="absolute  top-[15%]  h-[70%] left-[10%]  w-[80%] bg-white/[.1]  shadow-2xl  hidden md:flex justify-center items-center">
              <p className="text-lg text-white font-extrabold">
                Early registration{" "}
              </p>
            </div>
          </div>
          {/* login/signup */}
          <div className=" w-[100%] md:w-[50%]  rounded-xl  bg-white h-full flex items-center justify-center">
            {login ? (
              <Login handleLogin={handleLogin} />
            ) : (
              <Register handleLogin={handleLogin} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

// src="https://cdn2.slidemodel.com/wp-content/uploads/7382-01-duotone-gradients-powerpoint-templates-16x9-2.jpg"
