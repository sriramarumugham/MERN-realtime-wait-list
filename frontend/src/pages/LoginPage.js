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
      <div className="bg-blue-100 h-screen w-screen flex items-center justify-center sm:p-5 md:p-10">
        <div className=" p-5 sm:p-6 md:p-2 shadow-lg flex items-center justify-center h-[100%]  w-[100%]  max-w-5xl  rounded-lg  bg-white">
          {/* images */}
        

       
          <div className="bg-red-200   w-[0%] md:w-1/2  h-full  rounded-lg items-center justify-center ">
            <img
              className="object-cover h-[100%]"
              src="https://cdn2.slidemodel.com/wp-content/uploads/7382-01-duotone-gradients-powerpoint-templates-16x9-2.jpg"
            />
            
          </div>
          {/* login/signup */}
          <div className=" w-[100%] md:w-[50%]  bg-white  h-full flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

// src="https://cdn2.slidemodel.com/wp-content/uploads/7382-01-duotone-gradients-powerpoint-templates-16x9-2.jpg"
