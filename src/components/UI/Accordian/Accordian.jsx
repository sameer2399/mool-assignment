import React, { useState } from "react";
import ArrowDownIcon from "../../../assets/chevron-down.svg";

export const Accordian = ({
  title,
  expand: controlledExpand,
  onChange: setControlledExpand,
  children,
}) => {
  const [uncontrolledExpand, setUncontrolledExpand] = useState(
    !!controlledExpand
  );
  const expand = controlledExpand ?? uncontrolledExpand;
  const setExpand = setControlledExpand ?? setUncontrolledExpand;

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className="bg-white w-full">
      <div
        className="flex items-center bg-[#F4F6FA] py-5 w-full rounded-t-md"
        onClick={toggleExpand}
      >
        <div className="flex items-center gap-2 flex-1 font-bold text-lg text-[#344054] ml-6 hover:cursor-pointer">
          {title}
        </div>
        <button className="bg-transparent mr-8">
          <img
            src={ArrowDownIcon}
            alt="arrow down icon"
            className={`${expand ? "-rotate-90" : ""}`}
          />
        </button>
      </div>
      {expand ? (
        <div className="w-full border border-[#E6E9EE] rounded-b-md border-t-0">
          <div className="px-6 py-4 flex items-center justify-between text-sm font-medium text-[#667085] border-b border-[#D9D9DC]">
            <p>Item</p> <p>Amount ( in INR)</p>
          </div>
          <div className="px-6 py-4">{children}</div>
        </div>
      ) : null}
    </div>
  );
};
