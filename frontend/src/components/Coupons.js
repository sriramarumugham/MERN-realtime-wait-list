import React from "react";

const Coupons = () => {
  return (
    <div className="flex flex-col items-center justify-start h-[100%] w-[100%] bg-red-100">
      <p className="text-4xl mb-28 mt-5 "> <span><i class="fa-solid fa-angle-left"></i></span>  Your coupons</p>
      <div className="bg-pink-600   h-[400px] w-[225px]  flex flex-col rounded-2xl shadow-2xl  overflow-hidden">
        <div className="flex flex-col items-center justify-center h-[60%] w-[100%]  text-orange-400">
          <p className="text-3xl font-bold">25% OFF</p>
          <p className="text-2xl mt-5">IPHONE 14</p>
        </div>
        <div className="h-[10%] w-[100%]  relative flex  items-center">
          <div className="bg-red-200  rounded-[50%]  h-[100%] w-[14%]  absolute left-[-7%]"></div>
          <div className="w-[100%] border-dashed border border-spacing-2  border-x-2 border-black"></div>
          <div className="bg-red-200 rounded-[50%] h-[100%] w-[14%] absolute right-[-7%]"></div>
        </div>
        <div className="h-[20%] w-[100%] flex items-center justify-center">
          <button className="border-2   px-5 py-2 rounded-lg text-orange-400 border-orange-400">
            Reedem now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
