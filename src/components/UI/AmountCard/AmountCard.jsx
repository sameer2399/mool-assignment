import React from "react";

export default function AmountCard({ amount, title, icon, iconBackgroundColor }) {
  return (
    <div className="flex gap-4">
        <div className={`${iconBackgroundColor} rounded-full w-14 h-14 flex items-center justify-center`}>
      <img src={icon} alt="icon" className="h-6 w-6" />
        </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-[#667085]">{title}</p>
        <p className="text-xl font-bold">{amount}</p>
      </div>
    </div>
  );
}
