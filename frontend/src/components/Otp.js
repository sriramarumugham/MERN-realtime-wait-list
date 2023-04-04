import React ,{useState}from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserState } from "../context/UserProvider";
import otpImg from '../utils/otpPurple.png'


const Otp = () => {

  const { user } = UserState();
  console.log(user);
  const navigate = useNavigate();
  const [email, setEmail] = useState(user.email);

  return (
    <div className='w-[100%] sm:w-[90%] max-w-md flex-1 sm:h-[80%] pb-4 mb-16 sm:mb-5 sm:rounded-lg sm:shadow-lg  flex flex-col justify-start items-center'>
      <img className='h-[30%] ml-14 mt-10 sm:mt-5' src={otpImg}></img>
    <div className='w-[90%] flex-1 flex flex-col items-center p-5 sm:p-2 gap-3 '>
      <p className='text-2xl font-thin'>Verification</p>
    <p className='font-thin'>You will get an to <span className='font-bold underline'> OTP</span> via email</p>
    <p className='font-thin'>Expories in <span className='font-bold '> 05:00</span> </p>

    <form className='flex flex-col  h-[100%] justify-start gap-5 items-center  mt-10'>
      <input disabled placeholder='Enter opt' className='w-[100%] login-input'  /> 
      <button className='w-[100%]  bg-purple-400 hover:bg-purple-500 active:bg-purple-400 text-white text-lg px-5 py-1 rounded-lg'>GET OTP</button>
    </form>
    </div>
    </div>
  )
}

export default Otp