import React, { useEffect } from "react";
import iphone from "../utils/iphone.png";
import earphone from "../utils/earphone.png";
import axios from "axios";
import { UserState } from "../context/UserProvider";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { token, setUser } = UserState();

  const getInfo = async (token) => {
    let config = {
      headers: {
        Authorization: "Bearer " + token,
        withCredentials: true,
      },
    };

    axios
      .get("http://localhost:8000/user/get-info", config)
      .then((response) => {
        const { user } = response.data;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        getInfo(token);
      }, 100);
      return () => clearTimeout(timer);
  }, []);

  // component
  return (
    <div className="h-[100vh] w-[100vw] bg-white overflow-x-hidden relative  flex flex-col">
      {/* original downs */}
      {/* <div className="h-[100%] w-[100%] bg-white overflow-x-hidden relative  flex flex-col"> */}

      <div className="bg-white  rounded-2xl relative w-[100%] h-[70%] top-[-5%]  sm:h-[75%]  sm:w-[100%] sm:left-[0%] sm:top-[0%]  md:top-[2%]   md:left-[40%] md:h-[70%]  md:w-[60%]">
        <img
          src={earphone}
          className="object-contain w-[100%] h-[100%] sm:w-[90%] sm:h-[90%] absolute  left-[30%] top-[0%]"
        />

        <img
          src={iphone}
          className="object-contain  w-[100%] h-[100%] sm:w-[90%] sm:h-[90%]    absolute top-[6%] left-[-10%] sm:left-[-10%] md:left-[2%]  "
        />
        <div className="relative  w-[90%] top-[100%] sm:top-[90%] left-[3%] md:w-[90%] md:left-[-60%] md:top-[30%] flex flex-col items-start gap-4 sm:gap-5">
          <h1 className=" bg-clip-text  flex text-transparent bg-gradient-to-r  from-indigo-800 via-purple-700 to-pink-600  font-sans text-3xl    sm:text-5xl   md:text-7xl   ">
            The fastest, most powerful iPhone yet{" "}
          </h1>
        </div>
      </div>
      <div className=" mt-[-10%]  w-[100%] flex-1 flex justify-center items-center">
        <div className="mt-[10%]   md:mt-[7%] sm:mx-[10%] ">
          <p className=" text-2xl cursor-pointer sm:text-2xl md:text-4xl bg-clip-text   text-transparent bg-gradient-to-r  from-indigo-800 via-purple-700 to-pink-600  ">
          <Link to={'/reedem-coupons'} > Claim coupons</Link><i class="fa-solid fa-chevron-right"></i>
          
          {/* <Link to={'/leader-board'} > Leader bord</Link><i class="fa-solid fa-chevron-right"></i> */}
            {/* <Link to={'/early-register'} > Register</Link><i class="fa-solid fa-chevron-right"></i> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
