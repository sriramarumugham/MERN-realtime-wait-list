import React from "react";
import Coupons from "../components/Coupons";
import Score from "../components/Score";

const CouponsPages = () => {
  return (
    <div className="h-[200vh] w-[100vw]">
      <Score/>
      <Coupons />
    </div>
  );
};

export default CouponsPages;
