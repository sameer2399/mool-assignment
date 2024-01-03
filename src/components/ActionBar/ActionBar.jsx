import React from "react";
import Calender from "../../assets/calendar.svg";

export const ActionBar = () => {
  return (
    <div className="flex justify-between my-8 px-8">
      <h3 className="text-[24px] font-bold text-[#344054]">Chapter VI-A</h3>

      <div className="flex items-center">
        <span className="font-medium">Financial Year :</span>
        <div className="flex items-center gap-2 ml-2 border border-b-[#D9D9DC] h-10 px-4 rounded-lg hover:cursor-pointer">
          <img src={Calender} alt="help" className="w-5 h-5" />
          <span className="font-semibold">2023-24</span>
        </div>
      </div>
    </div>
  );
};
