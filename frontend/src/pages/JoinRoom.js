import React from "react";
import { Link, useNavigate } from "react-router-dom";


const JoinRoom = () => {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center justify-start h-[100%] w-[100%]  bg-white-100 bg-slate-50">
      <p  onClick={()=>{navigate(-1)}} className="text-4xl mb-28 mt-5  cursor-pointer">
        {" "}
        <span>
          <i class="fa-solid fa-angle-left"></i>
        </span>{" "}
Home

        
      </p>

      <div className=" w-[90%] max-w-md rounded-2xl shadow-lg bg-white m-2 p-5 pb-14">
        <form className="flex flex-col gap-2 mt-5">
          <label>Enter Referral code</label>
          <input placeholder="Password" className="login-input"></input>
          <label>Confirm Email</label>
          <input placeholder="Password" className="login-input"></input>
          <label>Enter OTP</label>
          <input placeholder="Password" className="login-input"></input>
          <button className="login-btn mt-10">Register </button>
        </form>
      </div>
    </div>
  );
};

export default JoinRoom;
