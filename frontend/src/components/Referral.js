import referralImg from '../utils/referral.png'

import React from 'react'

const Referral = () => {
  return (
    <div className='w-[100%] sm:w-[90%] max-w-md flex-1 sm:h-[80%] pb-4 mb-16 sm:mb-5 sm:rounded-lg sm:shadow-lg  flex flex-col justify-start items-center'>
      <img className='h-[30%] ml-10 mt-10 ' src={referralImg}></img>
    <div className='w-[90%] flex-1 flex flex-col items-center p-5 sm:p-2 gap-3 '>
      {/* <p className='text-2xl font-thin'>Verification</p>
    <p className='font-thin'>You will get an to <span className='font-bold underline'> OTP</span> via email</p>
    <p className='font-thin'>Expories in <span className='font-bold '> 05:00</span> </p> */}

    <form className='flex flex-col  h-[100%] justify-start gap-5 items-center  mt-10'>
      <label>Do you have a referral code ?</label>
      <input  placeholder='Enter a referral code' className='w-[100%] login-input'  /> 

      <button className='w-[100%]  bg-purple-400 hover:bg-purple-500 active:bg-purple-400 text-white text-lg px-5 py-1 rounded-lg'>Early register</button>
    </form>
    </div>
    </div>
  )
}

export default Referral