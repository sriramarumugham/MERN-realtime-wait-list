import React from "react";

const Score = () => {
  return (
    <div className="flex flex-col items-center  justify-start h-[100vh] w-[100vw] gap-5 bg-white ">
      <p className="text-4xl mt-5 ">
        <span>
          <i class="fa-solid fa-angle-left mr-3"></i>
        </span>
        Leaderboard
      </p>
      <div className="flex flex-col items-center justify-between w-[100%]  mt-5 max-w-lg h-[100%] ">
        {/* ranklist */}
        <div className="flex h-[65%] w-[90%] bg-white">
          <ul className="w-[100%] flex flex-col gap-2">
            <li className=" bg-indigo-300 w-[100%] px-5 py-2 rounded-lg"> <span  bg-blue-100 > #{1 }</span> Sreeram</li>
            <li className=" bg-indigo-300 w-[100%] px-5 py-2 rounded-lg"> <span> #{1 }</span> Sreeram</li>
            <li className=" bg-indigo-300 w-[100%] px-5 py-2 rounded-lg"> <span> #{1 }</span> Sreeram</li>
            <li className=" bg-indigo-300 w-[100%] px-5 py-2 rounded-lg"> <span> #{1 }</span> Sreeram</li>
            <li className=" bg-indigo-500 w-[100%] px-5 py-2 rounded-lg"> <span> #{1 }</span> Sreeram</li>

         
          </ul>
        </div>

        {/* referral link */}

        <div className="flex flex-col w-[90%]  h-[30%]   max-w-lg ">
          <div className="flex  flex-col  items-center justify-center border-3 rounded-lg shadow-lg mb-4 bg-indigo-600 p-5">
            <p className="text-lg font-bold text-orange-200">
              <span>
                <i class="fa-regular fa-clipboard mr-3"></i>
              </span>{" "}
              AKHKJHK
            </p>
          </div>
          {/* infstruction */}
          <div className="flex flex-col items-center justify-center">
            <ul>
              <li>25% off on the iphone 14 for #1</li>
              <li>Earn 10 poits on each referral </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
