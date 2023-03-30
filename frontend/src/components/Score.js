import React from "react";

const Score = () => {
  return (
    <div className="flex flex-col items-center  justify-start h-[100%] w-[100%] gap-5 bg-red-100 ">
      <p className="text-4xl mt-5 ">
        <span>
          <i class="fa-solid fa-angle-left mr-3"></i>
        </span>
        Leaderboard
      </p>
      <div className="flex flex-col items-center justify-between w-[100%] h-[100%] ">
        {/* ranklist */}
        <div className="flex h-[65%] bg-white">
          <ul>
            <li>Name rank </li>
            <li>Name rank </li>
            <li>Name rank </li>
          </ul>
        </div>

        {/* referral link */}

        <div className="flex flex-col w-[90%]  h-[30%]   max-w-lg ">
          <div className="flex  items-center justify-center border-3 rounded-lg shadow-lg mb-4 bg-pink-600 p-5">
            <p className="text-lg font-bold text-orange-200">
              <span>
                <i class="fa-regular fa-clipboard mr-3"></i>
              </span>{" "}
              AKHKJHK
            </p>
          </div>
          {/* infstruction */}
          <div className="w-[90%] mx-auto">
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
