import React from "react";
import HelpIcon from "../../assets/help-circle.svg";
import NotificationIcon from "../../assets/bell.svg";
import User from "../../assets/User.svg";
import ArrowDownIcon from "../../assets/chevron-down.svg";

export const Navbar = () => {
  return (
    <div className="bg-white border border-b-[#D9D9DC] flex items-center justify-end px-10 py-4">
      <div className="flex items-center gap-4">
        <img src={HelpIcon} alt="help" className="w-5 h-5" />
        <img src={NotificationIcon} alt="bell" className="w-5 h-5" />
        <button type="button" className="flex flex-row items-center gap-2 border border-b-[#E0E0E0] rounded-md px-3 h-12">
          <img src={User} alt="user-profile" className="w-8 h-8" />
          <span className="font-medium">Abhishek Mohanty</span>
          <img src={ArrowDownIcon} alt="bell" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
